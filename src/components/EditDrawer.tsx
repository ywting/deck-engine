import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { X, Check, AlertCircle, Save, RotateCcw } from 'lucide-react';
import type { SlideContent } from '../types';

interface EditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  /** Full deck (incl. hidden slides) from useSlides. */
  slides: SlideContent[];
  currentSlideId: string;
  saveSlide: (id: string, patch: Partial<SlideContent>) => Promise<boolean>;
  onReload: () => Promise<void>;
}

type SaveStatus = { kind: 'idle' | 'saving' | 'saved' | 'error'; message?: string; at?: string };

const METADATA_KEYS = ['role', 'scope', 'industries', 'scale', 'team', 'coreOutcomes'] as const;

const inputCls =
  'w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12.5px] text-[#334155] placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/15 transition';
const labelCls = 'text-[10px] font-semibold tracking-[0.08em] text-slate-500 uppercase';
const chipCls =
  'inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold tracking-wide uppercase';

export const EditDrawer: React.FC<EditDrawerProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideId,
  saveSlide,
  onReload,
}) => {
  const slide = useMemo(
    () => slides.find((s) => s.id === currentSlideId) ?? null,
    [slides, currentSlideId]
  );

  // Draft mirror: local edits land here instantly; saves are debounced to the API.
  const [draft, setDraft] = useState<SlideContent | null>(null);
  const draftRef = useRef<SlideContent | null>(null);
  draftRef.current = draft;
  const [status, setStatus] = useState<SaveStatus>({ kind: 'idle' });
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingFields = useRef<Set<string>>(new Set());
  const lastSlideIdRef = useRef<string>('');

  // Re-draft when the user moves to a different slide.
  useEffect(() => {
    if (slide && slide.id !== lastSlideIdRef.current) {
      flushNow();
      setDraft(structuredClone(slide));
      setStatus({ kind: 'idle' });
      lastSlideIdRef.current = slide.id;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide?.id]);

  // Live re-sync: when parent slides update (e.g. an inline edit while this
  // drawer is open), refresh the draft unless this drawer owns pending edits.
  useEffect(() => {
    if (!isOpen) return;
    if (slide && pendingFields.current.size === 0 && saveTimer.current === null) {
      setDraft(structuredClone(slide));
    }
  }, [slide]); // eslint-disable-line react-hooks/exhaustive-deps

  function flushNow() {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
      void doSave();
    }
  }

  async function doSave() {
    const id = lastSlideIdRef.current;
    const current = draftRef.current;
    const fields: string[] = Array.from(pendingFields.current);
    if (!id || !current || fields.length === 0) return;
    pendingFields.current = new Set();
    setStatus({ kind: 'saving' });
    const patch: Record<string, unknown> = {};
    for (const f of fields) patch[f] = (current as Record<string, unknown>)[f];
    const ok = await saveSlide(id, patch as Partial<SlideContent>);
    setStatus(ok ? { kind: 'saved', at: new Date().toLocaleTimeString() } : { kind: 'error', message: 'Save failed. Check the dev server log.' });
  }

  const patch = useCallback((field: string, value: unknown) => {
    setDraft((prev) => (prev ? ({ ...prev, [field]: value } as SlideContent) : prev));
    pendingFields.current.add(field);
    setStatus({ kind: 'saving' });
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => void doSave(), 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRevert = useCallback(async () => {
    flushNow();
    await onReload();
    setTimeout(() => {
      if (slide && slide.id === lastSlideIdRef.current) {
        setDraft(structuredClone(slide));
        setStatus({ kind: 'idle' });
      }
    }, 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, onReload]);

  useEffect(() => {
    if (!isOpen) flushNow();
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isOpen || !slide || !draft) return null;

  const statusChip =
    status.kind === 'saving' ? (
      <span className={`${chipCls} bg-blue-50 text-blue-600`}>
        <Save className="h-3 w-3" /> Saving…
      </span>
    ) : status.kind === 'saved' ? (
      <span className={`${chipCls} bg-emerald-50 text-emerald-600`}>
        <Check className="h-3 w-3" /> Saved {status.at}
      </span>
    ) : status.kind === 'error' ? (
      <span className={`${chipCls} bg-rose-50 text-rose-600`}>
        <AlertCircle className="h-3 w-3" /> {status.message}
      </span>
    ) : (
      <span className={`${chipCls} bg-slate-100 text-slate-500`}>Editing live</span>
    );

  return (
    <aside
      className="fixed top-0 right-0 z-[70] flex h-full w-[400px] flex-col border-l border-slate-200 bg-white/95 shadow-2xl backdrop-blur-md"
      style={{ fontFamily: "'Fira Sans', sans-serif" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div className="min-w-0">
          <h2 className="text-[13px] font-bold text-[#0F172A]">Edit slide</h2>
          <p className="truncate text-[10.5px] text-slate-400">{slide.id}</p>
        </div>
        <div className="flex items-center gap-2">
          {statusChip}
          <button
            onClick={onClose}
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close editor"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/60 px-4 py-2">
        <span className="truncate text-[11px] text-slate-500">
          Navigating the deck switches the edited slide. Edits save automatically.
        </span>
        <button
          onClick={handleRevert}
          className="ml-auto flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10.5px] font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50"
          title="Reload slide content from slides.json"
        >
          <RotateCcw className="h-3 w-3" /> Revert
        </button>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {/* Visibility + stack toggle */}
        <div className="flex flex-wrap items-center gap-3">
          <ToggleChip
            label="Hidden"
            active={!!draft.hidden}
            onClick={() => patch('hidden', !draft.hidden)}
            danger
          />
          <ToggleChip
            label="Stack bullets"
            active={!!draft.stackBullets}
            onClick={() => patch('stackBullets', !draft.stackBullets)}
          />
          <span className={`${chipCls} bg-violet-50 text-violet-600 ml-auto`}>{slide.visualType}</span>
        </div>

        <Field label="Tag">
          <input
            className={inputCls}
            value={draft.tag}
            onChange={(e) => patch('tag', e.target.value)}
            placeholder="[ SECTION ]"
          />
        </Field>

        <Field label="Slide title">
          <input
            className={inputCls}
            value={draft.slideTitle}
            onChange={(e) => patch('slideTitle', e.target.value)}
          />
        </Field>

        <Field label="Case study title">
          <input
            className={inputCls}
            value={draft.caseStudyTitle}
            onChange={(e) => patch('caseStudyTitle', e.target.value)}
          />
        </Field>

        <Field label="Case study subtitle">
          <input
            className={inputCls}
            value={draft.caseStudySubtitle}
            onChange={(e) => patch('caseStudySubtitle', e.target.value)}
          />
        </Field>

        <Field label="Headline">
          <textarea
            className={`${inputCls} min-h-[72px] resize-y leading-relaxed`}
            value={draft.headline}
            onChange={(e) => patch('headline', e.target.value)}
          />
        </Field>

        {draft.metadata !== undefined && (
          <Field label="Metadata">
            <div className="space-y-1.5">
              {Object.entries(draft.metadata ?? {}).map(([k, v]) => (
                <div key={k} className="flex items-start gap-1.5">
                  <span className={`${labelCls} w-24 shrink-0 pt-2 leading-none`}>{k}</span>
                  <input
                    className={inputCls}
                    value={String(v)}
                    onChange={(e) =>
                      patch('metadata', {
                        ...(draft.metadata ?? {}),
                        [k]: e.target.value,
                      })
                    }
                  />
                  <button
                    onClick={() => {
                      const next = { ...(draft.metadata ?? {}) } as Record<string, string>;
                      delete next[k];
                      patch('metadata', next);
                    }}
                    className="cursor-pointer rounded p-1 text-slate-300 transition hover:text-rose-500"
                    aria-label={`Remove ${k}`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
              <AddKeyRow onAdd={(k) => patch('metadata', { ...(draft.metadata ?? {}), [k]: '' })} />
            </div>
          </Field>
        )}

        {draft.metrics !== undefined && (
          <Field label={`Metrics (${draft.metrics.length})`}>
            <div className="space-y-2">
              {draft.metrics.map((m, i) => (
                <div key={i} className="space-y-1.5 rounded-lg border border-slate-100 bg-slate-50/50 p-2">
                  <div className="flex gap-1.5">
                    <input
                      className={inputCls}
                      value={m.value}
                      placeholder="+20%"
                      onChange={(e) =>
                        patch('metrics', draft.metrics!.map((x, j) => (j === i ? { ...x, value: e.target.value } : x)))
                      }
                    />
                    <input
                      className={inputCls}
                      value={m.label}
                      placeholder="Metric label"
                      onChange={(e) =>
                        patch('metrics', draft.metrics!.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)))
                      }
                    />
                    <button
                      onClick={() => patch('metrics', draft.metrics!.filter((_, j) => j !== i))}
                      className="cursor-pointer rounded p-1 text-slate-300 transition hover:text-rose-500"
                      aria-label={`Remove metric ${i + 1}`}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <MiniToggle label="highlight" on={!!m.highlight} onClick={() =>
                      patch('metrics', draft.metrics!.map((x, j) => (j === i ? { ...x, highlight: !x.highlight } : x)))
                    } />
                    <MiniToggle label="hero" on={!!m.hero} onClick={() =>
                      patch('metrics', draft.metrics!.map((x, j) => (j === i ? { ...x, hero: !x.hero } : x)))
                    } />
                    <MiniToggle label="green" on={!!m.green} onClick={() =>
                      patch('metrics', draft.metrics!.map((x, j) => (j === i ? { ...x, green: !x.green } : x)))
                    } />
                  </div>
                </div>
              ))}
              <AddButton label="Add metric" onClick={() =>
                patch('metrics', [...(draft.metrics ?? []), { value: '', label: '' }])
              } />
            </div>
          </Field>
        )}

        {draft.bullets !== undefined && (
          <Field label={`Bullet sections (${draft.bullets.length})`}>
            <div className="space-y-3">
              {draft.bullets.map((section, bi) => {
                const itemEntries = section.items ?? [];
                const updateItem = (ii: number, next: (string | Record<string, unknown>)) =>
                  patch('bullets', draft.bullets!.map((sec, j) =>
                    j === bi ? { ...sec, items: sec.items.map((it, k) => (k === ii ? next as never : it)) } : sec
                  ));
                const removeItem = (ii: number) =>
                  patch('bullets', draft.bullets!.map((sec, j) =>
                    j === bi ? { ...sec, items: sec.items.filter((_, k) => k !== ii) } : sec
                  ));
                return (
                  <div key={bi} className="space-y-2 rounded-lg border border-slate-100 bg-slate-50/50 p-2.5">
                    <div className="flex items-center gap-1.5">
                      <input
                        className={inputCls}
                        value={section.category ?? ''}
                        placeholder="Category"
                        onChange={(e) =>
                          patch('bullets', draft.bullets!.map((sec, j) =>
                            (j === bi ? { ...sec, category: e.target.value } : sec)))
                        }
                      />
                      <MiniQuickSelect
                        value={section.layout ?? ''}
                        placeholder="Layout"
                        options={[
                          ['grid-2x2', 'grid-2x2'],
                          ['numbered-row', 'numbered-row'],
                          ['numbered-column', 'numbered-column'],
                        ]}
                        onChange={(v) => {
                          if (v !== section.layout) {
                            const next = { ...section };
                            if (v) next.layout = v as never;
                            else delete (next as Record<string, unknown>).layout;
                            patch('bullets', draft.bullets!.map((sec, j) => (j === bi ? next : sec)));
                          }
                        }}
                      />
                      <button
                        onClick={() => patch('bullets', draft.bullets!.filter((_, j) => j !== bi))}
                        className="cursor-pointer rounded p-1 text-slate-300 transition hover:text-rose-500"
                        aria-label={`Remove section ${bi + 1}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {itemEntries.map((item, ii) => (
                      <BulletItemEditor
                        key={ii}
                        item={item}
                        onChange={(next) => updateItem(ii, next)}
                        onRemove={() => removeItem(ii)}
                      />
                    ))}

                    <AddButton
                      label="Add item"
                      onClick={(kind) =>
                        patch('bullets', draft.bullets!.map((sec, j) =>
                          j === bi
                            ? { ...sec, items: [...sec.items, kind === 'list' ? { list: [] } : { title: '', desc: '' }] as never }
                            : sec
                        ))
                      }
                      listMode
                    />
                  </div>
                );
              })}
              <AddButton
                label="Add section"
                onClick={() => patch('bullets', [...(draft.bullets ?? []), { category: '', items: [] }])}
              />
            </div>
          </Field>
        )}

        <Field label="Quote">
          <textarea
            className={`${inputCls} min-h-[56px] resize-y`}
            value={draft.quote ?? ''}
            onChange={(e) => patch('quote', e.target.value)}
          />
        </Field>

        <Field label="Speaker notes">
          <textarea
            className={`${inputCls} min-h-[72px] resize-y`}
            value={draft.speakerNotes ?? ''}
            onChange={(e) => patch('speakerNotes', e.target.value)}
          />
        </Field>
      </div>
    </aside>
  );
};

/* ---------- Small building blocks ---------- */

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="space-y-1.5">
    <p className={labelCls}>{label}</p>
    {children}
  </div>
);

const ToggleChip: React.FC<{ label: string; active: boolean; onClick: () => void; danger?: boolean }> = ({
  label,
  active,
  onClick,
  danger,
}) => (
  <button
    onClick={onClick}
    className={`cursor-pointer rounded-full border px-2.5 py-1 text-[10.5px] font-semibold transition ${
      active
        ? danger
          ? 'border-rose-200 bg-rose-50 text-rose-600'
          : 'border-blue-200 bg-blue-50 text-blue-600'
        : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
    }`}
  >
    {label} {active ? '✓' : ''}
  </button>
);

const MiniToggle: React.FC<{ label: string; on: boolean; onClick: () => void }> = ({ label, on, onClick }) => (
  <button
    onClick={onClick}
    className={`cursor-pointer text-[10px] font-semibold transition ${on ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
  >
    {on ? '☑' : '☐'} {label}
  </button>
);

const MiniQuickSelect: React.FC<{
  value: string;
  placeholder: string;
  options: [string, string][];
  onChange: (v: string) => void;
}> = ({ value, placeholder, options, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="cursor-pointer shrink-0 rounded-lg border border-slate-200 bg-white px-1.5 py-1.5 text-[11px] text-[#334155] focus:border-blue-400 focus:outline-none"
  >
    <option value="">{placeholder}</option>
    {options.map(([v, l]) => (
      <option key={v} value={v}>{l}</option>
    ))}
  </select>
);

const AddButton: React.FC<{ label: string; onClick: (kind?: string) => void; listMode?: boolean }> = ({
  label,
  onClick,
  listMode,
}) => (
  <div className="flex gap-1.5">
    <button
      onClick={() => onClick()}
      className="cursor-pointer rounded-full border border-dashed border-slate-300 px-3 py-1 text-[10.5px] font-medium text-slate-500 transition hover:border-blue-300 hover:text-blue-600">
      + {label}
    </button>
    {listMode && (
      <button
        onClick={() => onClick('list')}
        className="cursor-pointer rounded-full border border-dashed border-slate-300 px-3 py-1 text-[10.5px] font-medium text-slate-500 transition hover:border-blue-300 hover:text-blue-600">
        + list item
      </button>
    )}
  </div>
);

const AddKeyRow: React.FC<{ onAdd: (key: string) => void }> = ({ onAdd }) => {
  const [key, setKey] = useState('');
  return (
    <div className="flex gap-1.5">
      <input
        className={inputCls}
        placeholder="New key…"
        value={key}
        onChange={(e) => setKey(e.target.value.replace(/[^a-zA-Z]/g, ''))}
      />
      <button
        disabled={!key}
        onClick={() => {
          if (key) {
            onAdd(key);
            setKey('');
          }
        }}
        className="shrink-0 cursor-pointer rounded-lg border border-slate-200 bg-white px-2.5 text-[11px] font-medium text-slate-500 transition enabled:hover:border-blue-300 enabled:hover:text-blue-600 disabled:opacity-40">
        Add
      </button>
    </div>
  );
};

/** Renders one bullet item. Strings and {list} items are fully editable;
 *  avatar/logos/badge objects show as read-only JSON. */
const BulletItemEditor: React.FC<{
  item: unknown;
  onChange: (next: string | Record<string, unknown>) => void;
  onRemove: () => void;
}> = ({ item, onChange, onRemove }) => {
  if (typeof item === 'string') {
    return (
      <div className="relative">
        <textarea
          className={`${inputCls} min-h-[40px] resize-y pr-7`}
          value={item}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Bullet text"
        />
        <RemoveButton onRemove={onRemove} className="top-1.5" />
      </div>
    );
  }
  if (item && typeof item === 'object') {
    const it = item as {
      title?: string; desc?: string; italic?: boolean; titleItalic?: boolean;
      list?: string[]; avatar?: string; logos?: unknown[]; badge?: string;
    };
    if (it.list) {
      return (
        <div className="relative">
          <textarea
            className={`${inputCls} min-h-[56px] resize-y pr-7 font-mono text-[11px]`}
            value={it.list.join('\n')}
            onChange={(e) => onChange({ ...it, list: e.target.value.split('\n') })}
            placeholder="One entry per line"
          />
          <RemoveButton onRemove={onRemove} className="top-1.5" />
        </div>
      );
    }
    // Media/asset objects: show read-only JSON (not hand-edit friendly).
    if (it.avatar || it.logos || (it.badge && !it.title)) {
      return (
        <div className="relative rounded-lg border border-amber-200 bg-amber-50/60 p-2">
          <pre className="overflow-x-auto font-mono text-[10px] text-amber-800">
            {JSON.stringify(it, null, 1)}
          </pre>
          <RemoveButton onRemove={onRemove} className="top-1.5" />
        </div>
      );
    }
    return (
      <div className="relative space-y-1.5 rounded-lg border border-slate-100 bg-white p-2">
        <div className="flex items-center gap-1.5">
          <MiniToggle label="italic" on={!!it.italic} onClick={() => onChange({ ...it, italic: !it.italic })} />
          <MiniToggle label="titleItalic" on={!!it.titleItalic} onClick={() => onChange({ ...it, titleItalic: !it.titleItalic })} />
        </div>
        <input
          className={inputCls}
          value={it.title ?? ''}
          placeholder="Title"
          onChange={(e) => onChange({ ...it, title: e.target.value })}
        />
        <textarea
          className={`${inputCls} min-h-[48px] resize-y`}
          value={it.desc ?? ''}
          placeholder="Description"
          onChange={(e) => onChange({ ...it, desc: e.target.value })}
        />
        <RemoveButton onRemove={onRemove} className="top-1.5 right-1.5" />
      </div>
    );
  }
  return null;
};

const RemoveButton: React.FC<{ onRemove: () => void; className?: string }> = ({ onRemove, className = '' }) => (
  <button
    onClick={onRemove}
    className={`cursor-pointer rounded p-1 text-slate-300 transition hover:text-rose-500 ${className ? 'absolute right-0.5' : ''} ${className}`}
    aria-label="Remove"
  >
    <X className="h-3 w-3" />
  </button>
);

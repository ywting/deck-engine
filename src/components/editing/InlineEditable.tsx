import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { useEdit } from './EditContext';

// Inline edits must not bubble into clickable bullet cards ("VIEW CASE" etc).
const e_stopPropagation = (e: { stopPropagation: () => void }) => e.stopPropagation();



interface InlineEditableProps {
  /** Current committed value. */
  value: string;
  /** Commit target path, e.g. "headline" or "bullets[0].items[1].desc". */
  path: string;
  /** Behaviour switch: textarea swap (multiline) vs contentEditable (single-line). */
  multiline?: boolean;
  /** Element to render when not editing. */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  className?: string;
  /** Display content (e.g. highlightText output) shown when edit mode is off. */
  children?: React.ReactNode;
}

const editableRing =
  'rounded-[3px] transition-[outline,background-color] duration-150 hover:outline hover:outline-1 hover:outline-dashed hover:outline-blue-400/60 hover:bg-blue-500/[0.04]';

/**
 * Click-to-edit wrapper for data-driven slide text.
 * Edit mode off → renders the display element untouched (highlight spans via children).
 * Edit mode on, single-line → the element becomes contentEditable; Enter/blur commits.
 * Edit mode on, multiline → swaps to an auto-sized textarea in place; blur/✓ commits, ✕/Escape reverts.
 */
export const InlineEditable: React.FC<InlineEditableProps> = ({
  value,
  path,
  multiline = false,
  as: Tag = 'span',
  className = '',
  children,
}) => {
  const { editing, commit } = useEdit();
  const editableRef = useRef<HTMLElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [openTextArea, setOpenTextArea] = useState(false);
  const [draft, setDraft] = useState(value);
  const [focused, setFocused] = useState(false);

  // Value can change under us (drawer/inline elsewhere) — caret editing wins visually.
  useEffect(() => {
    if (editableRef.current?.isContentEditable) return;
    if (editableRef.current) editableRef.current.textContent = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editing]);

  // Enter edit text on becoming editable.
  useLayoutEffect(() => {
    if (editing && editableRef.current) {
      editableRef.current.textContent = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  useLayoutEffect(() => {
    if (multiline && openTextArea && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(textareaRef.current.value.length, textareaRef.current.value.length);
    }
  }, [multiline, openTextArea]);

  const commitText = () => {
    const text = editableRef.current?.textContent ?? value;
    if (text !== value) commit(path, text);
  };

  /* ---------- Edit mode OFF (or idle non-editable render) ---------- */
  if (!editing) {
    return <Tag className={className}>{children ?? value}</Tag>;
  }

  /* ---------- Multiline: textarea swap ---------- */
  if (multiline) {
    if (openTextArea) {
      return (
        <div className={`relative ${className}`} onClick={(e) => e.stopPropagation()}>
          <textarea
            ref={textareaRef}
            className="w-full resize-none rounded-[6px] border border-blue-400 border-dashed bg-white/95 px-2 py-1 shadow-[0_1px_10px_rgba(37,99,235,0.12)] outline-none ring-4 ring-blue-500/10 font-[inherit] text-[length:inherit]"
            style={{ minHeight: '2em' }}
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              const el = e.target;
              el.style.height = '0px';
              el.style.height = `${el.scrollHeight}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                setOpenTextArea(false);
              }
            }}
            onBlur={() => {
              commit(path, draft);
              setOpenTextArea(false);
            }}
          />
          <div className="absolute -bottom-8 right-0 z-50 flex gap-1.5">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                commit(path, draft);
                setOpenTextArea(false);
              }}
              className="flex h-6 cursor-pointer items-center gap-1 rounded-full bg-blue-600 px-2.5 text-[10px] font-semibold text-white shadow-lg hover:bg-blue-500"
              title="Apply"
            >
              <Check className="h-3 w-3" /> Apply
            </button>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setOpenTextArea(false)}
              className="flex h-6 cursor-pointer items-center rounded-full bg-slate-200 px-2.5 text-[10px] font-semibold text-slate-600 shadow hover:bg-slate-300"
              title="Revert to saved text"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      );
    }
    return (
      <Tag
        className={`cursor-text ${editableRing} ${className}`}
        title="Click to edit"
        onClick={(e) => {
          e_stopPropagation(e);
          setDraft(value);
          setOpenTextArea(true);
        }}
      >
        {value}
      </Tag>
    );
  }

  /* ---------- Single-line: contentEditable ---------- */
  return (
    <Tag
      ref={editableRef as unknown as React.Ref<HTMLDivElement>}
      className={`cursor-text outline-none focus:bg-blue-500/[0.05] focus:ring-2 focus:ring-blue-500/25 focus:outline-none ${focused ? 'rounded-[3px]' : editableRing} ${className}`}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      title="Click to edit"
      onClick={e_stopPropagation}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        commitText();
      }}
      onInput={() => {
        // Keep React out of the caret's way; text lives in the DOM node.
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          (e.target as HTMLElement).blur();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          const el = e.target as HTMLElement;
          el.textContent = value;
          el.blur();
        }
      }}
    />
  );
};

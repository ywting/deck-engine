import React from 'react';

/**
 * Highlights matches of a query string within a given text string.
 */
export function highlightText(text: string, query: string): React.ReactNode {
  if (!query || !query.trim() || !text) {
    return text;
  }

  const trimmedQuery = query.trim();
  // Escape regex special characters
  const escaped = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  if (parts.length === 1) {
    return text;
  }

  return (
    <>
      {parts.map((part, index) => {
        if (part.toLowerCase() === trimmedQuery.toLowerCase()) {
          return (
            <mark
              key={index}
              className="bg-amber-400/40 text-amber-200 font-semibold px-1 py-0.5 rounded border border-amber-500/50 shadow-sm"
            >
              {part}
            </mark>
          );
        }
        return part;
      })}
    </>
  );
}

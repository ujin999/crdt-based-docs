import { useEffect, useRef } from "react";

import { EditorView } from "prosemirror-view";

import { createEditor } from "../../editor-core/editor/createEditor";

import "./styles.css";

export function Editor() {
  const editorRootRef = useRef<HTMLDivElement | null>(null);

  const editorViewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRootRef.current) return;

    const view = createEditor(editorRootRef.current);

    editorViewRef.current = view;

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="editor-shell">
      <div ref={editorRootRef} />
    </div>
  )
}
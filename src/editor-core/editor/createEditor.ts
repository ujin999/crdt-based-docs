import { EditorState } from "prosemirror-state";

import { EditorView } from "prosemirror-view";

import { schema } from "prosemirror-schema-basic";

import { keymap } from "prosemirror-keymap";

import { baseKeymap } from "prosemirror-commands";

import { history } from "prosemirror-history";

import { basicSchema } from "../schema/basicSchema";

import { transactionLogger } from "../plugins/transactionLogger";

export function createEditor(element: HTMLElement) {
  const state = EditorState.create({
    schema: basicSchema,

    plugins: [
      history(),

      keymap(baseKeymap),

      transactionLogger,
    ],
  });

  /* 
  * new EditorView(element, options)
  * element: The DOM element where the editor will be mounted.
  * options: 
  */ 

  const view = new EditorView(element, {
    state,

    dispatchTransaction(transaction) {
      const nextState = view.state.apply(transaction);

      view.updateState(nextState);
    },
  });

  return view;
}
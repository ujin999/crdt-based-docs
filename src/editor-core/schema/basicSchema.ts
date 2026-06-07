import { Schema } from 'prosemirror-model';

export const basicSchema = new Schema({
  nodes: {
    doc: {
      content: "block+",
    },

    paragraph: {
      group: "block",
      content: "text*",

      toDOM() {
        return ["p", 0];
      },

      parseDOM: [
        {
          tag: "p",
        },
      ],
    },

    text: {
      group: "inline",
    }
  },

  marks: {},
})
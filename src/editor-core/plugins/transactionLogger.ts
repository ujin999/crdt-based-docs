import { Plugin } from "prosemirror-state";

export const transactionLogger = new Plugin({
  appendTransaction(transactions) {
    for (const transaction of transactions) {
      if (!transaction.docChanged) continue;

      console.group("ProseMirror Transaction");

      console.log("Transaction:", transaction);
      
      console.log("Steps:");
      console.log(transaction.steps);

      console.log("Mapping:");
      console.log(transaction.mapping);

      console.log("Document:");
      console.log(transaction.doc.toJSON());

      console.groupEnd();
    }

    return null;
  },
});
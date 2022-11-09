import readline from "node:readline";
import { LinkedList } from "./linked-list/linked-list.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const linkedListTests = () => {
  console.log("Init tests");

  const list = new LinkedList();

  list.insertFirst(1);
  list.insertFirst(2);
  list.insertFirst(3);
  list.insertLast(4);
  list.insertAt(3, 5);

  console.log(list.size);
  console.log(list.head.value);
  console.log(list.head.next.value);
  console.log(list.tail.value);

  console.log(
    "All elements",
    list.nodes.map((v) => v.value)
  );

  console.log("Remove", list.removeAt(1));

  console.log(list.getAt(1).value);

  console.log(list.head.next.value);

  console.log(
    "All elements",
    list.nodes.map((v) => v.value)
  );

  list.clear();

  console.log(list.size);

  console.log("End tests");
};

rl.question(
  "What data structure do you want to test? 1 - Linked List",
  (option) => {
    const optionNumber = Number(option);

    switch (optionNumber) {
      case 1:
        linkedListTests();
        break;
      default:
        console.log("Any option selected");
    }
  }
);

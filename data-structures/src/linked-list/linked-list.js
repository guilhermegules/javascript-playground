export class LinkedList {
  #nodes = [];

  get nodes() {
    return this.#nodes;
  }

  get size() {
    return this.#nodes.length;
  }

  get head() {
    return this.size ? this.#nodes[0] : null;
  }

  get tail() {
    return this.size ? this.#nodes.at(-1) : null;
  }

  insertAt(index, value) {
    const previousNode = this.#nodes.at(-1) || null;
    const nextNode = this.#nodes.at(index) || null;
    const node = { value, next: nextNode };

    if (previousNode) {
      previousNode.next = node;
    }

    this.#nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    this.insertAt(0, value);
  }

  insertLast(value) {
    this.insertAt(this.size, value);
  }

  getAt(index) {
    return this.#nodes.at(index);
  }

  removeAt(index) {
    const previousNode = this.#nodes.at(-1);
    const nextNode = this.#nodes.at(index + 1) || null;

    if (previousNode) {
      previousNode.next = nextNode;
    }

    return this.#nodes.splice(index, 1);
  }

  clear() {
    this.#nodes = [];
  }
}

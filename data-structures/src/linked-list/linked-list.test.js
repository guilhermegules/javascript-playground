import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  it("should create a linked list and set an element on the init", () => {
    const list = new LinkedList();

    list.insertFirst(1);

    expect(list.size).toBe(1);
    expect(list.head.value).toBe(1);
    expect(list.head.next).toBe(null);
    expect(list.tail.value).toBe(1);
  });
  it("should create a linked list and set an element in the last position", () => {
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertLast(2);

    expect(list.size).toBe(2);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(2);
  });
  it("should create a linked list and set an element in a specific position", () => {
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(4);
    list.insertAt(2, 3);

    expect(list.size).toBe(4);
    expect(list.head.value).toBe(4);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(1);
  });
  it("should create a linked list and remove an element in a passed position", () => {
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertFirst(2);

    list.removeAt(0);

    expect(list.size).toBe(1);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(1);
    expect(list.tail.value).toBe(1);
  });
  it("should create a linked list and get an element by index", () => {
    const list = new LinkedList();

    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);

    expect(list.getAt(0).value).toBe(3);
    expect(list.getAt(1).value).toBe(2);
    expect(list.getAt(2).value).toBe(1);
  });
  it("should clear the list", () => {
    const list = new LinkedList();

    list.insertFirst(1);

    list.clear();

    expect(list.size).toBe(0);
  });
});

class ListNode {
  next: ListNode | undefined;
  value: number;

  constructor(value: number) {
      this.value = value;
      this.next = undefined;
  }

  print(): void {
      console.log(this.value + " ");
  }
}

class LinkedList {
  head: ListNode | undefined;
  private tail: ListNode | undefined;
  private length: number;

  constructor() {
      this.head = undefined;
      this.tail = this.head;
      this.length = 0;
  }

  print(): void {
      let cur: ListNode | undefined = this.head;
      while (cur !== undefined) {
          console.log(cur.value + ", ");
          cur = cur.next;
      }
  }

  valuesToArray(): number[] {
      let result: number[] = [];
      let cur: ListNode | undefined = this.head;

      while (cur !== undefined) {
          result.push(cur.value);
      }
      return result;
  }

  size(): number {
      return this.length;
  }

  addNode(value: number): void {
      let newNode :ListNode = new ListNode(value);
      if (this.tail === undefined) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length += 1;
  }

  deleteNode(value: Number): Boolean {
      let cur: ListNode | undefined = this.head;
      let prev: ListNode | undefined = this.head;

      while (cur !== undefined) {
          if(cur.value === value) {
              if (prev === undefined) {
                  this.head = cur.next;
              } else {
                  prev.next = cur.next;
              }
              // TODO: relinquish the space being consumed by the cur?
              this.length -= 1;
              return true;
          }
          prev = cur;
          cur = cur.next;
      }

      return false;
  }
};

console.log("LinkedList");

let list = new LinkedList();

list.addNode(10);

list.print();

list.addNode(5);

list.print();

list.addNode(7);

list.print();

console.log(list.size());

list.deleteNode(5);

list.print();

console.log(list.size());
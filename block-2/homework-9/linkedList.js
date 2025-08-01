class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class List {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  get length() {
    return this._length;
  }

  insert(data) {
    const node = new Node(data);
    let current = this.head;
    if (!current) {
      this.head = node;
      this._length++;
      return node;
    }
    // List { head: { data: data, next: { data: data, next: null } } }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
  }

  getAll() {
    let current = this.head;
    if (!current) {
      return 'the list is empty!';
    }
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  search(data) {
    let current = this.head;
    if (!current) {
      return 'the list is empty!';
    }
    if (current.data === data) {
      return 'item find!';
    }

    // List { head: { data: data, next: { data: data, next: null } } }
    while (current) {
      if (current.data === data) {
        return 'item find!';
      }
      if (!current.next) {
        return 'item not found!';
      }
      current = current.next;
    }
  }

  //   List { head: { data: data, next: { data: data, next: null }
  remove(data) {
    let current = this.head;
    if (!current) {
      return 'the list is empty!';
    }

    if (current.data === data) {
      this._length--;
      if (current.next) {
        this.head = current.next;
        return 'deleted element!';
      }
      this.head = null;
      return;
    }

    while (current) {
      if (current.next && current.next.data === data) {
        if (current.next.next) {
          current.next = current.next.next;
          this._length--;
          return 'deleted element!';
        }
        current.next = null;
        this._length--;
        return 'deleted element!';
      }

      current = current.next;
    }

    return 'item not found!';
  }
}

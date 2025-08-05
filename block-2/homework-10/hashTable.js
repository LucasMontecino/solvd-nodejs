import { hashFunction } from './hashFunction.js';

export class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    // tracks the number of elements in the hash table
    this.size = 0;
  }

  //   converts the given key into an index within the table array
  hash(key) {
    return hashFunction(key, this.table.length);
  }

  //   table = [ empty, empty, empty, empty, ISEMPTY, empty, empty, empty... ]
  // (not real empty values, we know actually that are undefined values)
  insert(key, value) {
    const idx = this.hash(key);
    if (!this.table[idx]) {
      // initialize an array if the bucket is empty
      // table = [und, und, und, [ [key, value] ] , ...]
      this.table[idx] = [];
    }

    // checking if the key already exists in the table,
    // if it is, we update the value
    for (let i = 0; i < this.table[idx].length; i++) {
      if (this.table[idx][i][0] === key) {
        this.table[idx][i][1] = value;
        return;
      }
    }
    this.table[idx].push([key, value]);
    this.size++;
  }

  get(key) {
    const idx = this.hash(key);

    // key not found
    if (!this.table[idx]) {
      return;
    }

    for (let i = 0; i < this.table[idx].length; i++) {
      if (this.table[idx][i][0] === key) {
        return this.table[idx][i][1];
      }
    }

    // if the key wasn't found in the bucket
    return;
  }

  delete(key) {
    const idx = this.hash(key);
    if (!this.table[idx]) {
      // if it doesn't exist we return false
      return false;
    }

    for (let i = 0; i < this.table[idx].length; i++) {
      if (this.table[idx][i][0] === key) {
        // remove the element
        this.table[idx].splice(i, 1);
        // decrease size variable
        this.size--;
        return true;
      }
    }
    // if the key doesn't exist
    return false;
  }
}

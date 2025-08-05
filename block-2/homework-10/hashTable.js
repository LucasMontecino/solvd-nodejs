function hashFn(key, tableLength) {
  let hash = 17;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * key.charCodeAt(i)) % tableLength;
  }

  return hash;
}

class HashTable {
  constructor(size = 333) {
    // store the table array, the number of items, and the loadfactor to resize
    this.table = new Array(size);
    this.size = 0;
    this.loadFactor = this.size / this.table.length;
  }

  // programmatically calculated the load factor when need it
  calcLoadFactor = (newSize, newLength) => {
    this.loadFactor = newSize / newLength;
  };

  // method that resize the table, and loop the older table to generate new hashes based on the new length of the table
  resize = () => {
    const newTable = new Array(this.table.length * 2);

    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashFn(key, newTable.length);
          if (newTable[idx]) {
            const item = newTable[idx].find((item) => item[0] === key);
            if (item) {
              item[1] = value;
            } else {
              newTable[idx].push([key, value]);
            }
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });

    this.table = newTable;
  };

  // set key value pairs handling collisions with separate chaining
  // recalculate load factor and resize if need it
  // also we increment the size of elements when we store a new key in the table
  insert = (key, value) => {
    const idx = hashFn(key, this.table.length);

    if (this.table[idx]) {
      const item = this.table[idx].find((item) => item[0] === key);
      if (item) {
        item[1] = value;
      } else {
        this.size++;
        this.calcLoadFactor(this.size, this.table.length);
        if (this.loadFactor > 0.8) {
          this.resize();
        }
        this.table[idx].push([key, value]);
      }
    } else {
      this.size++;
      this.calcLoadFactor(this.size, this.table.length);
      if (this.loadFactor > 0.8) {
        this.resize();
      }
      this.table[idx] = [[key, value]];
    }
  };

  // we return null if the bucket is empty
  // otherwise returns the value if the key exists in the bucket or null if it doesn't
  get = (key) => {
    const idx = hashFn(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    const item = this.table[idx].find((x) => x[0] === key);
    return item ? item[1] : null;
  };

  // return null if the bucket is empty,
  // otherwise loop trought the bucket
  // if we find the key, we remove [key, value]
  // otherwise we return null
  delete(key) {
    const idx = hashFn(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    for (let i = 0; i < this.table[idx].length; i++) {
      const curr = this.table[idx][i];
      if (curr[0] === key) {
        this.table[idx].splice(i, 1);
        this.size--;

        return;
      }
    }

    return null;
  }
}

const myTable = new HashTable(3);

myTable.insert('firstName', 'Bob');
myTable.insert('lastName', 'Sinclair');

console.log(myTable.delete('lastName'));
myTable.insert('age', 30);
myTable.insert('email', 'lucasm9@gmail.com');

console.log(myTable.delete('age'));
console.log(myTable.delete('firstName'));
console.log(myTable.delete('email'));

myTable.insert('firstName', 'Bob');
myTable.insert('lastName', 'Sinclair');

myTable.insert('age', 30);
myTable.insert('email', 'lucasm9@gmail.com');
myTable.insert('address', 'belgrano 443');

console.log(myTable.get('firstName'));
console.log(myTable.get('lastName'));
console.log(myTable.get('age'));
console.log(myTable.get('email'));

console.log(myTable.get('street'));

console.log(myTable.table);

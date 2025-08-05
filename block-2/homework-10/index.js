import { HashTable } from './hashTable.js';

/* --------------------------------------------- */
/* Hash Table Implementation                     */
/* --------------------------------------------- */

const hashTable = new HashTable(10);

console.log('the hash table...', hashTable);

const myHash = hashTable.hash('Lucas');
console.log('my first hash...', myHash);

hashTable.insert('Lucas', 10);
hashTable.insert('Lucas', 23);
hashTable.insert('Juanf', 7);
hashTable.insert('LuckV', 11);

const keyLucas = hashTable.get('Juanf');

console.log('the value of lucas..', keyLucas);

hashTable.delete('LuckV');

console.log('the hash table..', hashTable.table);

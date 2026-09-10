// You can use Set/Map but you need to know how hashing works under the hood.
// The idea for hashing is: O(1) average-time access instead of looping through arrays.
// To solve collisions you can :
/*
    1- Chaining: put values in the same index but in an array (BUCKET). (LIKE IN THIS EXAMPLE)
    2- Open addressing: search for an empty index. (SEE https://www.geeksforgeeks.org/dsa/open-addressing-collision-handling-technique-in-hashing/)
*/

/*
.find() is a method for arrays that searches for the first element that satisfies a condition (a callback function).

Syntax:
arr.find(callback(element, index, array))

Returns the first element that makes callback return true.
Returns undefined if no element matches.
*/

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = Array.from({ length: size }, () => []); // each slot is a bucket for chaining
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // sum of character codes
    }
    return total % this.size; // ensure index is within table size
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index]; // get the bucket at that index

    // check if the key already exists in the bucket
    const sameKeyPair = bucket.find((pair) => pair[0] === key);
    if (sameKeyPair) {
      sameKeyPair[1] = value; // key exists → update value
    } else {
      bucket.push([key, value]); // key not found → add new pair
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index]; // get the bucket at that index

    if (!bucket) return undefined;

    const pair = bucket.find((pair) => pair[0] === key); // search for key in bucket
    return pair ? pair[1] : undefined; // return value if found
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index]; // get the bucket at that index

    if (!bucket) return;

    // filter out the key to remove
    this.table[index] = bucket.filter((pair) => pair[0] !== key);
  }

  display() {
    this.table.forEach((bucket, index) => {
      if (bucket.length > 0) {
        console.log(index, bucket); // show index + bucket contents
      }
    });
  }
}

// Example usage
const table = new HashTable(10);

table.set("cat", 10);
table.set("dog", 20);
table.set("sun", 30);
table.set("dog", 50); // updates dog

console.log("Get dog:", table.get("dog")); // 50

table.remove("cat");

table.display();

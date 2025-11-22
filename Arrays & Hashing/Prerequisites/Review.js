/////////////////////////////////////////////////
//                 ARRAYS
/////////////////////////////////////////////////

// Creation
const a = [1, 2, 3];
new Array(5) || Array(5); // empty slots

Array.isArray(a); // check array
Array.from(iterable); // convert iterable → array 
Array.from({length:N},()=>{}) // Creates new array of length N with init fn

// Add / Remove (mutate)
a.push(x); // add end
a.pop(); // remove end
a.unshift(x); // add start
a.shift(); // remove start
a.splice(i, n, ...items); // remove n from i, optional insert

// Copy / Slice (no mutation)
a.slice(i, j); // copy [i, j)
a.concat(b); // merge arrays
a.toReversed(); // reversed copy (ES2023)
a.toSorted(); // sorted copy (ES2023)

// Transform
a.map(fn);
a.filter(fn);
a.reduce(fn, init);
a.flat(n); // flatten depth n
a.flatMap(fn);

// Search
a.indexOf(x);
a.lastIndexOf(x);
a.includes(x);
a.find(fn);
a.findIndex(fn);
a.some(fn);
a.every(fn);

// Iterate
a.forEach(fn);
for (const x of a) {
}

/////////////////////////////////////////////////
//                 OBJECTS
/////////////////////////////////////////////////

const o = { a: 1, b: 2 };

// Access
o.a;
o["a"];

// Check
Object.hasOwn(o, "a"); // true

// Convert
Object.keys(o); // ['a', 'b']
Object.values(o); // [1, 2]
Object.entries(o); // [['a',1],['b',2]]

// From entries
Object.fromEntries([
  ["a", 1],
  ["b", 2],
]);

// Copy / Merge
Object.assign({}, o, otherObj); // shallow copy
const copy = structuredClone(o); // deep copy

// Iterate
for (const key in o) {
}
Object.entries(o).forEach(([key, val]) => {});
Object.values(o).forEach((val) => {});

/////////////////////////////////////////////////
//                 MAP (Hash Map)
/////////////////////////////////////////////////

const m = new Map();
m.set(key, value);
m.get(key);
m.has(key);
m.delete(key);
m.size;
m.clear();

for (const [k, v] of m) {
}

/////////////////////////////////////////////////
//                 SET (Unique Values)
/////////////////////////////////////////////////

const s = new Set([1, 2, 3]);
s.add(4);
s.has(2);
s.delete(1);

for (const v of s) {
}

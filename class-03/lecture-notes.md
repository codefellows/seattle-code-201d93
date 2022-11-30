# CLASS 03 LECTURE NOTES

## Arrays

- Data type // Data Structure **special type of object**
- A collection or a list of elements
  - can be mixed - I can store numbers, strings, other arrays all in the same array
- Don't have determine the size of our array

- Every element will have a position in array - referred to as its index
  - Arrays are zero based index

```js
//                0     1   2    3
let myArray = ['hello', 1, true, 'bye'];
```

- Arrays also have built-in methods
  - `.push()` - add to the end of the array
  - `.pop()` - remove the last element from the array

- Arrays also have properties
  - `.length` - this going to tell me how many elements live in my array

## Loops

### For

- Great for looping/iterating and doing something for a certain number of times
- Great for looping through arrays! (arrays have a length)

```javascript
// anatomy of an for loop
for(starting value; condition; increment){
  do something until that condition is no longer true;
}
```

### While

- Doing something until a condition is no longer true
- Beware of infinite loops!

```javascript
// anatomy of a while loop
while(condition){
  run until that condition is no longer true
}
```

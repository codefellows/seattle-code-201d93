# Class 02 Lecture Notes

## JavaScript

JavaScript is a **loosely typed** and **dynamic** language

- Loosely type - we don't need to know the type of data before declaring a variable
- Dynamic - you can change the type after it has been declared

- `let cat;`

- `cat = 3;`

- `cat = 'meow';`

## Data Types

### Strings

- sequence of characters used to represent text. written using single quotes.
- `'hello'`, `'4309fehwaiore3n'`

### Numbers

- numeric data type
- full numbers, decimals, negatives

### Boolean

- logical data types
- true // false
- truthy // falsey

### Undefined

- it has not been defined yet

### Null

- has been defined but defined as none

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false

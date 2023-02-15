<h1>Expressions and operators</h1>

An **expression** is a valid unit of code that resolves to a value.

There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.

The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to 7.

The expression 3 + 4 is an example of the second type. This expression uses the + operator to add 3 and 4 together and produces a value, 7.

However, if it's not eventually part of a bigger construct (EX: a variable declaration like const z = 3 + 4), its result will be immediately discarded — this is usually a programmer mistake because the evaluation doesn't produce any effects.

As the examples above also illustrate, all complex expressions are joined by operators, such as = and +.

**Operators:**

1Assignment operators
1Comparison operators
1Arithmetic operators
1Bitwise operators
1Logical operators
1BigInt operators
1String operators
1Conditional (ternary) operator
1Comma operator
1Unary operators
1Relational operators

These operators join operands either formed by higher-precedence operators or one of the basic expressions.

The precedence of operators determines the order they are applied when evaluating an expression.

**EXAMPLE:**

const x = 1 + 2 * 3;
const y = 2 * 3 + 1;

Despite */ and +/ coming in different orders, both expressions would result in 7 because */ has precedence over +/, so the */-joined expression will always be evaluated first. You can override operator precedence by using parentheses (which creates a grouped expression — the basic expression). (IGNORE slashes.)

JavaScript has both **binary** and **unary** operators, and one special **ternary** operator, the conditional operator. A binary operator requires two operands, one before the operator and one after the operator:

operand1 operator operand2 (IGNORE slashes.)

For example, 3 + 4 or x * y. This form is called an **infix** binary operator, because the operator is placed between two operands. All binary operators in JavaScript are infix.

A unary operator requires a single operand, either before or after the operator:

operator operand
operand operator

For example, x++ or ++x. The operator operand form is called a prefix unary operator, and the operand operator form is called a postfix unary operator. ++ and -- are the only postfix operators in JavaScript — all other operators, like !, typeof, etc. are prefix.

<h1>Assignment operators</h1>

An **assignment operator** assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x.

There are also compound assignment operators that are shorthand for the operations listed here:

Assignment  *Shorthand operator* x = f()  *Meaning* x = f()

Addition assignment  *Shorthand operator* x += f()  *Meaning*    x = x + f()

Subtraction assignment  *Shorthand operator* x -= f()  *Meaning*    x = x - f()

Multiplication assignment  *Shorthand operator* x *= f()  *Meaning*  x = x * f()

Division assignment  *Shorthand operator* x /= f()  *Meaning* x = x / f()

Remainder assignment *Shorthand operator*  x %= f()  *Meaning* x = x % f()

Exponentiation assignment  *Shorthand operator* x **= f()  *Meaning* x = x ** f()

Left shift assignment  *Shorthand operator* x <<= f()  *Meaning* x = x << f()

Right shift assignment  *Shorthand operator*  x >>= f()  *Meaning* x = x >> f()

Unsigned right shift assignment  *Shorthand operator* x >>>= f()  *Meaning* x = x >>> f()

Bitwise AND assignment  *Shorthand operator* x &= f()  *Meaning* x = x & f()

Bitwise XOR assignment  *Shorthand operator*  x ^= f()  *Meaning* x = x ^ f()

Bitwise OR assignment  *Shorthand operator* x |= f()  *Meaning* x = x | f()

Logical AND assignment  *Shorthand operator* x &&= f()  *Meaning* x && (x = f())

Logical OR assignment  *Shorthand operator*  x ||= f()  *Meaning* x || (x = f())

Nullish coalescing assignment  *Shorthand operator*  x ??= f() *Meaning*  x ?? (x = f())

<h1>Assigning to properties</h1>
If an expression evaluates to an object, then the left-hand side of an assignment expression may make assignments to properties of that expression.
**EXAMPLE:**

const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.

If an expression does not evaluate to an object, then assignments to properties of that expression do **not** assign:

const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.
Copy to ClipboardCopy to Clipboard

In strict mode, the code above throws, because one cannot assign properties to primitives.

It is an error to assign values to unmodifiable properties or to properties of an expression without properties (null or undefined).

<h1>**Destructuring**</h1>
For more complex assignments, the **destructuring** assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.

const foo = ["one", "two", "three"];

// without destructuring
const one = foo[0];
const two = foo[1];
const three = foo[2];

// with destructuring
const [one, two, three] = foo;

<h1>**Evaluation and nesting**</h1>

In general, assignments are used within a variable declaration (i.e., with const, let, or var) or as standalone statements).

// Declares a variable x and initializes it to the result of f().
// The result of the x = f() assignment expression is discarded.
let x = f();

x = g(); // Reassigns the variable x to the result of g().

However, like other expressions, assignment expressions like x = f() evaluate into a result value. Although this result value is usually not used, it can then be used by another expression.

Chaining assignments or nesting assignments in other expressions can result in surprising behavior. For this reason, some JavaScript style guides discourage chaining or nesting assignments). Nevertheless, assignment chaining and nesting may occur sometimes, so it is important to be able to understand how they work.

By chaining or nesting an assignment expression, its result can itself be assigned to another variable. It can be logged, it can be put inside an array literal or function call, and so on.

let x;
const y = (x = f()); // Or equivalently: const y = x = f();
console.log(y); // Logs the return value of the assignment x = f().

console.log(x = f()); // Logs the return value directly.

// An assignment expression can be nested in any place
// where expressions are generally allowed,
// such as array literals' elements or as function calls' arguments.
console.log([0, x = f(), 0]);
console.log(f(0, x = f(), 0));

The evaluation result matches the expression to the right of the = sign in the "Meaning" column of the table above. That means that x = f() evaluates into whatever f()'s result is, x += f() evaluates into the resulting sum x + f(), x **= f() evaluates into the resulting power x ** y, and so on.

In the case of logical assignments, x &&= f(), x ||= f(), and x ??= f(), the return value is that of the logical operation without the assignment, so x && f(), x || f(), and x ?? f(), respectively.

When chaining these expressions without parentheses or other grouping operators like array literals, the assignment expressions are **grouped right to left** (they are right-associative), but they are evaluated *left to right*.

**Note:** That for all assignment operators other than = itself, the resulting values are always based on the operands' values before the operation.

For example, assume that the following functions f and g and the variables x and y have been declared:

function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;

Consider these three examples:

y = x = f();
y = [f(), x = g()];
x[f()] = g();

**_Evaluation example 1_**
y = x = f() is equivalent to y = (x = f()), because the assignment operator = is right-associative. However, it evaluates from left to right:

The assignment expression y = x = f() starts to evaluate.
The y on this assignment's left-hand side evaluates into a reference to the variable named y.
The assignment expression x = f() starts to evaluate.
The x on this assignment's left-hand side evaluates into a reference to the variable named x.
The function call f() prints "F!" to the console and then evaluates to the number 2.
That 2 result from f() is assigned to x.
The assignment expression x = f() has now finished evaluating; its result is the new value of x, which is 2.
That 2 result in turn is also assigned to y.
The assignment expression y = x = f() has now finished evaluating; its result is the new value of y – which happens to be 2. x and y are assigned to 2, and the console has printed "F!".

**_Evaluation example 2_**
y = [ f(), x = g() ] also evaluates from left to right:

The assignment expression y = [ f(), x = g() ] starts to evaluate.
The y on this assignment's left-hand evaluates into a reference to the variable named y.
The inner array literal [ f(), x = g() ] starts to evaluate.
The function call f() prints "F!" to the console and then evaluates to the number 2.
The assignment expression x = g() starts to evaluate.
The x on this assignment's left-hand side evaluates into a reference to the variable named x.
The function call g() prints "G!" to the console and then evaluates to the number 3.
That 3 result from g() is assigned to x.
The assignment expression x = g() has now finished evaluating; its result is the new value of x, which is 3. That 3 result becomes the next element in the inner array literal (after the 2 from the f()).
The inner array literal [ f(), x = g() ] has now finished evaluating; its result is an array with two values: [ 2, 3 ].
That [ 2, 3 ] array is now assigned to y.
The assignment expression y = [ f(), x = g() ] has now finished evaluating; its result is the new value of y – which happens to be [ 2, 3 ]. x is now assigned to 3, y is now assigned to [ 2, 3 ], and the console has printed "F!" then "G!".


**_Evaluation example 3_**
x[f()] = g() also evaluates from left to right. (This example assumes that x is already assigned to some object. For more information about objects, read Working with Objects.)

The assignment expression x[f()] = g() starts to evaluate.
The x[f()] property access on this assignment's left-hand starts to evaluate.
The x in this property access evaluates into a reference to the variable named x.
Then the function call f() prints "F!" to the console and then evaluates to the number 2.
The x[f()] property access on this assignment has now finished evaluating; its result is a variable property reference: x[2].
Then the function call g() prints "G!" to the console and then evaluates to the number 3.
That 3 is now assigned to x[2]. (This step will succeed only if x is assigned to an object.)
The assignment expression x[f()] = g() has now finished evaluating; its result is the new value of x[2] – which happens to be 3. x[2] is now assigned to 3, and the console has printed "F!" then "G!".
<h1>**Avoid assignment chains**</h1>

Chaining assignments or nesting assignments in other expressions can result in surprising behavior. For this reason, chaining assignments in the same statement is discouraged).

In particular, putting a variable chain in a const, let, or var statement often does not work. Only the outermost/leftmost variable would get declared; other variables within the assignment chain are **not** declared by the const/let/var statement.
**EXAMPLE:**

const z = y = x = f();

This statement seemingly declares the variables x, y, and z. However, it only actually declares the variable z. y and x are either invalid references to nonexistent variables (in strict mode) or, worse, would implicitly create global variables for x and y in sloppy mode.

<h1>**Comparison operators**</h1>
A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically. The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality.

<h1>Comparison operators</h1>
Equal (==)  Returns true if the operands are equal.

Not equal (!=)  Returns true if the operands are not equal.

Strict equal (===)  Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.

Strict not equal (!==)  Returns true if the operands are of the same type but not equal, or are of different type.

Greater than (>)  Returns true if the left operand is greater than the right operand.

Greater than or equal (>=)  Returns true if the left operand is greater than or equal to the right operand.

Less than (<)  Returns true if the left operand is less than the right operand.

Less than or equal (<=)  Returns true if the left operand is less than or equal to the right operand.

**Note:** => is not a comparison operator but rather is the notation for Arrow functions.

<h1>**Arithmetic operators**</h1>

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). 

These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity).
**EXAMPLE:**

1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true.

Remainder (%)	Binary operator. Returns the integer remainder of dividing the two operands. 12 % 5 returns 2.

Increment (++)	Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one. If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.

Decrement (--)	Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator. If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.

Unary negation (-)  Unary operator. Returns the negation of its operand.  If x is 3, then -x returns -3.

Unary plus (+)  Unary operator. Attempts to convert the operand to a number, if it is not already.	
+"3" returns 3.

+true returns 1.

Exponentiation operator (**)	Calculates the base to the exponent power, that is, base^exponent	2 ** 3 returns 8.
10 ** -1 returns 0.1.

<h1>**Bitwise operators**</h1>
A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

Bitwise AND	a & b	Returns a one in each bit position for which the corresponding bits of both operands are ones.

Bitwise OR	a | b	Returns a zero in each bit position for which the corresponding bits of both operands are zeros.

Bitwise XOR	a ^ b	Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]

Bitwise NOT	~ a	Inverts the bits of its operand.

Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.

Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.

Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.

Bitwise logical operators
Conceptually, the bitwise logical operators work as follows:

The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones). Numbers with more than 32 bits get their most significant bits discarded. 
**EXAMPLE, the following integer with more than 32 bits will be converted to a 32-bit integer:**
Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
After:                 1010 0000 0000 0000 0110 0000 0000 0001

<h1>Loops and iteration**</h1>
Loops offer a quick and easy way to do something repeatedly.

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
Copy to Clipboard
There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

The statements for loops provided in JavaScript are:

1for statement
1do...while statement
1while statement
1labeled statement
1break statement
1continue statement
1for...in statement
1for...of statement

<h1>**For statement**</h1>
A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

for (initialization; condition; afterthought)
  statement
Copy to Clipboard

When a for loop executes, the following occurs:
The initializing expression *initialization*, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
The *condition* expression is evaluated. If the value of *condition* is true, the loop statements execute. Otherwise, the *for* loop terminates. (If the *condition* expression is omitted entirely, the condition is assumed to be true.)
The *statement* executes. To execute multiple statements, use a block statement ({ }) to group those statements.
If present, the update expression *afterthought* is executed.
Control returns to Step 2.

<h1>**do...while statement**</h1>
The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

do
  statement
while (condition);
Copy to ClipboardCopy to Clipboard
statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.
In the following example, the do loop iterates at least once and reiterates until i is no longer less than 5.

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

while statement
A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

while (condition)
  statement

If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

To execute multiple statements, use a block statement ({ }) to group those statements.

**EXAMPLE 1:**
The following while loop iterates as long as n is less than 3:

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:

After the first pass: n = 1 and x = 1
After the second pass: n = 2 and x = 3
After the third pass: n = 3 and x = 6
After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

**EXAMPLE 1:**
Avoid infinite loops. Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate! The statements in the following while loop execute forever because the condition never becomes false:

// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}

<h1>**labeled statement**</h1>
A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

The syntax of the labeled statement looks like the following:

label:
  statement

The value of label may be any JavaScript identifier that is not a reserved word. The statement that you identify with a label may be any statement.

**EXAMPLE:**
In this example, the label markLoop identifies a while loop.

markLoop: while (theMark) {
  doSomething();
}

</h1>**break statement**</h1>
Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:

break;
break label;

1The first form of the syntax terminates the innermost enclosing loop or switch.
1The second form of the syntax terminates the specified enclosing labeled statement.

<h1>**continue statement**</h1>
The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
When you use continue with a label, it applies to the looping statement identified with that label.
The syntax of the continue statement looks like the following:

continue;
continue label;

<h1>**for...in statement**</h1>
The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

for (variable in object)
  statement

*EXAMPLE:*
The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.

function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
For an object car with properties make and model, result would be:

car.make = Ford
car.model = Mustang

<h1>**Arrays**</h1>
Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.

Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).

<h1>**for...of statement**</h1>
The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

for (variable of object)
  statement

The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

The for...of and for...in statements can also be used with destructuring. For example, you can simultaneously loop over the keys and values of an object using Object.entries().

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2

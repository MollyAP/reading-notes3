**<h2>Control Flow</h2>** - the order in which the computer executes statements in a script.

What **Control Flow** also means is that when you read a script, you must not only read from start to finish but also look at program structure and how it affects the order of execution.

Code is run in order from the first line in the file to the last line, unless the computer runs across the very frequent structures that change the control flow, such as **conditionals** and **loops**.

The script submits validated data, but if the user were to leave a required field empty the script prompts them to fill it in. To do so, the script uses a conditional structure or "if" and "else", so that different code executes, depending on whether the form is complete or not.

**EXAMPLE**:
if (isEmpty(field)) {
  promptUser();
} else {
  submitForm();
}

Scripts in JavaScript or PHP includes many control structures like including conditionals, loops and functions. Parts of a script also maybe set to execute when events occur.

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

Parentheses might include parameter names separated by commas: (parameter1, parameter2, ...)
Code to be executed by the function is placed inside curly brackets: {}

**Function parameters** are what's listed inside the parentheses () in the function definition.

**Function arguments** are the values received by the function when it is invoked.

Inside the function the arguments (the parameters) behave as local variables.


**Function Invocation**

⦁	The code inside the function will execute when "something" invokes (calls) the function:
⦁	When an event occurs (when a user clicks a button)
⦁	When it is invoked from JavaScript code.
⦁	Automatically (self invoked).


**<h2>Function Return</h2>**

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller".


**<h2>Why Functions?</h2>**

You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

The () Operator Invokes the Function

Using the example above, toCelsius refers to the function object, and toCelsius() refers to the function result.

Accessing a function without () will return the function object instead of the function result.

Functions Used as Variable Values

Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.


**<h2>Local Variables</h2>**

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.

The Assignment Operator (=) assigns a value to a variable.

The Addition Operator (+) adds numbers:

The Multiplication Operator (*) multiplies numbers.


**<h2>Types of JavaScript Operators</h2>**

There are different types of JavaScript operators:

⦁	Arithmetic Operators
⦁	Assignment Operators
⦁	Comparison Operators
⦁	Logical Operators
⦁	Conditional Operators
⦁	Type Operators

Operator:

+/	 means  Addition

-/	 means  Subtraction

*/	 means  Multiplication

** means  Exponentiation (ES2016)

/	 means  Division

%	 means  Modulus (Division Remainder)

++ means  Increment

-- means  Decrement

**(IGNORE slashes)**


**<h2>JavaScript Assignment Operators</h2>**

Assignment operators assign values to JavaScript variables.

The Addition Assignment Operator (+=) adds a value to a variable.

Operator:

<br>=	  *EXAMPLE*  x = y	  *SAME AS*  x = y</br>

<br>+=  *EXAMPLE*  x += y   *SAME AS*	 x = x + y</br>

<br>-=	*EXAMPLE*  x -= y   *SAME AS*	 x = x - y</br>

<br>*=	*EXAMPLE*  x *= y   *SAME AS*	 x = x * y</br>

<br>/=	*EXAMPLE*  x /= y   *SAME AS*	 x = x / y</br>

<br>%=	*EXAMPLE*  x %= y   *SAME AS*	 x = x % y</br>

<br>**=	*EXAMPLE*  x **= y  *SAME AS*  x = x ** y</br>


**<h2>Adding JavaScript Strings</h2>**

The + operator can also be used to add (concatenate) strings.

**EXAMPLE**:

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
The result of text3 will be:

John Doe

The += assignment operator can also be used to add (concatenate) strings:

**EXAMPLE**:

let text1 = "What a very ";
text1 += "nice day";
The result of text1 will be:

What a very nice day

**NOTE**: When used on strings, the + operator is called the concatenation operator.


**<h2>Adding Strings and Numbers</h2>**

Adding two numbers, will return the sum, but adding a number and a string will return a string:

**EXAMPLE**:

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
The result of x, y, and z will be:

10
55
Hello5

If you add a number and a string, the result will be a string!

**<h2>JavaScript Comparison Operators</h2>**

Operator:

==	means  equal to

===	means  equal value and equal type

!=	means  not equal

!==	means  not equal value or not equal type

/>	  means  greater than

<	  means  less than

/>=	means  greater than or equal to

<=	means  less than or equal to

?	  means  ternary operator

**(IGNORE slashes)**

**<h2>JavaScript Logical Operators</h2>**

Operator:

&& *means* logical and

|| *means* logical or

!	 *means* logical not

**<h2>JavaScript Type Operators</h2>**

Operator:

typeof means Returns the type of a variable

instanceof means Returns true if an object is an instance of an object type

**<h2>JavaScript Bitwise Operators</h2>**

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
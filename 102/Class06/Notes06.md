JavaScript

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).

Do not confuse JavaScript with the Java programming language — JavaScript is not "Interpreted Java". Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.


Equality comparisons and sameness

JavaScript provides three different value comparison operations: strict equality using ===, loose equality using ==, and the Object.is() method.

Closures
A closure is the combination of a function and the lexical environment within which that function was declared.

Inheritance and the prototype chain
Explanation of the widely misunderstood and underestimated prototype-based inheritance.

JavaScript typed arrays
JavaScript typed arrays provide a mechanism for accessing raw binary data.

Memory Management
Memory life cycle and garbage collection in JavaScript.

Standard objects
Get to know standard built-in objects Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String, Map, Set, WeakMap, WeakSet, and others.

Expressions and operators
Learn more about the behavior of JavaScript's operators instanceof, typeof, new, this, the operator precedence, and more.

Statements and declarations
Learn how do-while, for-in, for-of, try-catch, let, var, const, if-else, switch, and more JavaScript statements and keywords work.

Functions
Learn how to work with JavaScript's functions to develop your applications.

Classes
JavaScript classes are the most appropriate way to do object-oriented programming.


Traditionally JavaScript was used inside web browsers such as Mozilla Firefox, Internet Explorer, Chrome, Opera, or Safari. The author would include some JavaScript code in the HTML page the user receives when she visits a web site. That JavaScript code would run in the browser (what we call "client side", as opposed to running on the web server which is called "server side").

In recent years people have started to put JavaScript code on the server as well. Probably the most well know environment to run JavaScript on the server is Node.js, but there are others. For example io.js which started as a Node.js fork.
We can distinguish 3 major parts of what we usually refer to as "JavaScript".

The language itself. This is fairly standard among the various environments, both in the various browsers and in the various server-side environments.
The DOM API - how the language can interact with the various parts of a web page while in the browser. While in this respect the various browsers are getting closer to each other they still differ. Several libraries, most prominently JQuery, is trying to provide a unified API.
The server API (or just API) provided by Node.js or one of the other server-side systems.

Editor or IDE
Any text editor can be used.

On MS Windows you can even use the built-in plain Notepad, but I'd recommend something more powerful. You can download Notepad++ which is very similar to Notepad, but with tons of extra features, or get Aptana Studio. The latter has a steeper learning curve, so you might want to start with the more simple tool.

Embed or include
You can either embed the JavaScript code directly inside the HTML file, or you can put a line in the HTML file that will include the external JavaScript file. In most cases the latter is recommended, but for our first examples, in order to make the whole thing work in a single file, we'll embed the JavaScript code inside some HTML.

In order to do that we add the < script > opening and </script> closing tags. Between the two we write our JavaScript code.

Input Output
The very first thing we need to learn is how to interact with the JavaScript code running in the browse. There are a number of way JavaScript can display text for the user (output). The most simple one is by using the alert function:

Alert
This will show a pop-up in the browser with the text. (You can click on Try! that will open the specific script in a separate window.) The alert() function is actually rarely used, but it is an easy way to show the use of JavaScript.
examples/ js /alert.html

< script language="javascript" >

alert("Hello World");

</script>

Document.write
examples/ js /document_write.html

First line
< script >

document.write("<h1>Hello World</h1>");

</script>
Last line

Console.log
Finally let's see how developers usually print out debugging information.

examples/ js /console.html

< script >

console.log("Hello World");

</script>

Prompt
The fist one is called prompt. It will show a pop-up window with the text provided as the first parameter and with a textbox the user can fill in. When the user presses OK, the value in the text box will be returned by the prompt() function. Then, in this example we use the document.write method to update the html with the text.

examples/ js /prompt.html

< script >

var name = prompt("Your name:", "");
document.write("Hello ", name);

</script>

The textbox will be pre-filled with the content of the second parameter. This can be very useful if we would like to ask the user to edit some value. We can pre-fill the box with the old value.

examples/ js /edit.html

< script >

var name = prompt("Please correct your e-mail address:", "foo@bar.co");
document.write("Your e-mail address is ", name);

</script>

In either case, if the user presses cancel or hits the ESC the prompt() function will return null.

Confirm
The other pop-up is not really an input method. It allows the developer to ask a Yes/No question. Calling the confirm() function will show a pop-up window with the provided texts and with two buttons. If the user presses OK the confirm() function will return true, if the user presses cancel or hits the ESC key, the function will return false.

Of course in order for this to make more sense you'll have to understand what true and false really mean and what this if - else construct does. If you have programming background then you probably already understand the code, and even if you don't have programming background you might figure out.

That code can basically be translated to the following English sentence:

If confirm returned true, print "Hello World", otherwise print "OK, I won't print it."

Or even better:

If the user presses OK when we asked "Shall I print Hello World?", then print "Hello World", otherwise print "OK, I won't print it."

examples/ js /confirm.html

< script >

if (confirm("Shall I print Hello World?")) {
    document.write("Hello World");
} else {
    document.write("OK, I won't print it.");
}

</script>

4 Ways to Declare a JavaScript Variable:
Using var
Using let
Using const
Using nothing

What are Variables?
Variables are containers for storing data (storing data values).
In this example, x, y, and z, are variables, declared with the var keyword:

EXAMPLE:
var x = 5;
var y = 6;
var z = x + y;

In this example, x, y, and z, are variables, declared with the let keyword:

EXAMPLE:
let x = 5;
let y = 6;
let z = x + y;

In this example, x, y, and z, are undeclared variables:

EXAMPLE:
x = 5;
y = 6;
z = x + y;

From all the examples above, you can guess:
x stores the value 5
y stores the value 6
z stores the value 11

When to Use JavaScript var?
Always declare JavaScript variables with var,let, orconst.
The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
If you want your code to run in older browsers, you must use var.

When to Use JavaScript const?
If you want a general rule: always declare variables with const.
If you think the value of the variable can change, use let.
In this example, price1, price2, and total, are variables:

EXAMPLE:
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

The two variables price1 and price2 are declared with the const keyword.
These are constant values and cannot be changed.
The variable total is declared with the let keyword.
This is a value that can be changed.

Just like in algebra, variables hold values:

let x = 5;
let y = 6;
Just like in algebra, variables are used in expressions:

let z = x + y;
From the example above, you can guess that the total is calculated to be 11.

NOTE: Variables are containers for storing values.

JavaScript Identifiers

All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
The general rules for constructing names for variables (unique identifiers) are:
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.

NOTE: JavaScript identifiers are case-sensitive.
The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

This is different from algebra. The following does not make sense in algebra:

x = x + 5
In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)
NOTE: The "equal to" operator is written like == in JavaScript.

JavaScript Data Types

JavaScript variables can hold numbers like 100 and text values like "John Doe".
In programming, text values are called text strings.
JavaScript can handle many types of data, but for now, just think of numbers and strings.
Strings are written inside double or single quotes. Numbers are written without quotes.
If you put a number in quotes, it will be treated as a text string.

EXAMPLE:
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

Declaring a JavaScript Variable

Creating a variable in JavaScript is called "declaring" a variable.
You declare a JavaScript variable with the var or the let keyword:

var carName;
or:
let carName;

After the declaration, the variable has no value (technically it is undefined).
To assign a value to the variable, use the equal sign:

carName = "Volvo";
let carName = "Volvo";
In the example below, we create a variable called carName and assign the value "Volvo" to it.
Then we "output" the value inside an HTML paragraph with id="demo":

EXAMPLE:
<p id="demo"></p>

<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>

Note: It's a good programming practice to declare all variables at the beginning of a script.
One Statement, Many Variables
You can declare many variables in one statement.
Start the statement with let and separate the variables by comma:

EXAMPLE:
let person = "John Doe", carName = "Volvo", price = 200;

A declaration can span multiple lines:

EXAMPLE:
let person = "John Doe",
carName = "Volvo",
price = 200;

Value = undefined

In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value undefined.

The variable carName will have the value undefined after the execution of this statement:

Example
let carName;

Re-Declaring JavaScript Variables
If you re-declare a JavaScript variable declared with var, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:

Example:
var carName = "Volvo";
var carName;

Note: You cannot re-declare a variable declared with let or const.
This will not work:
let carName = "Volvo";
let carName;
JavaScript Arithmetic
As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

EXAMPLE:
let x = 5 + 2 + 3;
You can also add strings, but strings will be concatenated:

EXAMPLE:
let x = "John" + " " + "Doe";
Also

EXAMPLE:
let x = "5" + 2 + 3;
Note: If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

EXAMPLE:
let x = 2 + 3 + "5";
JavaScript Dollar Sign $
Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

Example
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

JavaScript Underscore (_)
Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

EXAMPLE:
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
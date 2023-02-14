<h1>**Expressions and operators**</h1>

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

**<h1>Assignment operators</h1>**

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
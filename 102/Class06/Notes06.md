Control Flow - the order in which the computer executes statements in a script.
What Control Flow also means is that when you read a script, you must not only read from start to finish but also look at program structure and how it affects the order of execution.
Code is run in order from the first line in the file to the last line, unless the computer runs across the very frequent structures that change the control flow, such as conditionals and loops.
The script submits validated data, but if the user were to leave a required field empty the script prompts them to fill it in. To do so, the script uses a conditional structure or "if" and "else", so that different code executes, depending on whether the form is complete or not.
EXAMPLE:
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

Function parameters are what's listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function the arguments (the parameters) behave as local variables.
Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:
When an event occurs (when a user clicks a button)
When it is invoked from JavaScript code.
Automatically (self invoked).
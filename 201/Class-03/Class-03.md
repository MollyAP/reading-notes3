<h1>Learning HTML</h1>

**The Ordered List element**

The < ol > HTML element represents an ordered list of items — typically rendered as a numbered list.

reversed
This Boolean attribute specifies that the list's items are in reverse order. Items will be numbered from high to low.

start
An integer to start counting from for the list items. Always an Arabic numeral (1, 2, 3, etc.), even when the numbering type is letters or Roman numerals. For example, to start numbering elements from the letter "d" or the Roman numeral "iv," use start="4".

type
Sets the numbering type:

a for lowercase letters
A for uppercase letters
i for lowercase Roman numerals
I for uppercase Roman numerals
1 for numbers (default)
The specified type is used for the entire list unless a different type attribute is used on an enclosed <li> element.

**Note**: Unless the type of the list number matters (like legal or technical documents where items are referenced by their number/letter), use the CSS list-style-type property instead.

Usage notes
Typically, ordered list items display with a preceding marker, such as a number or letter.

The < ol > and < ul > elements may nest as deeply as desired, alternating between < ol > and < ul > however you like.

The < ol > and < ul > elements both represent a list of items. The difference is with the < ol > element, the order is meaningful.

EXAMPLE:
Steps in a recipe
Turn-by-turn directions
The list of ingredients in decreasing proportion on nutrition information labels

To determine which list to use, try changing the order of the list items; if the meaning changes, use the <ol> element — otherwise you can use <ul>.

**EXAMPLES**:
Simple example
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>

Using Roman Numeral type
<ol type="i">
  <li>Introduction</li>
  <li>List of Grievances</li>
  <li>Conclusion</li>
</ol>

Using the start attribute
<p>Finishing places of contestants not in the winners' circle:</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>

Nesting lists
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag is not here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>

Unordered list inside ordered list
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag is not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <!-- Here's the closing </li> tag -->
  <li>third item</li>
</ol>

**The Unordered List element**

The < ul > HTML element represents an unordered list of items, typically rendered as a bulleted list.

Attributes
This element includes the global attributes.

Usage notes
The < ul > element is for grouping a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle, or a square. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.

The < ul > and < ol > elements may be nested as deeply as desired. Moreover, the nested lists may alternate between < ol > and < ul > without restriction.

The < ol > and < ul > elements both represent a list of items. They differ in that, with the < ol > element, the order is meaningful. To determine which one to use, try changing the order of the list items; if the meaning is changed, the < ol > element should be used, otherwise you can use < ul >.

EXAMPLES:
Simple example
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>

Nesting a list
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ul>
      <li>second item first subitem</li>
      <li>
        second item second subitem
        <!-- Same for the second nested unordered list! -->
        <ul>
          <li>second item second subitem first sub-subitem</li>
          <li>second item second subitem second sub-subitem</li>
          <li>second item second subitem third sub-subitem</li>
        </ul>
      </li>
      <!-- Closing </li> tag for the li that
                  contains the third unordered list -->
      <li>second item third subitem</li>
    </ul>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>

Ordered list inside unordered list
<ul>
  <li>first item</li>
  <li>
    second item
    <!-- Look, the closing </li> tag is not placed here! -->
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ol>
    <!-- Here is the closing </li> tag -->
  </li>
  <li>third item</li>
</ul>

When should you use an unordered list in your HTML document? When marking up content whih could be defined as a list.

How do you change the bullet style of unordered list items? By using 'list-style-type'.

When should you use an ordered list vs an unordered list in your HTML document? An Unordered list should be used to create a list of related items, in no particular order.
An Ordered list should be used to create a list of related items, in a specific order.

Describe two ways you can change the numbers on list items provided by an ordered list? 

<h1>Learn CSS</h1>

**Block and inline boxes**
In CSS we have several types of boxes that generally fit into the categories of block boxes and inline boxes. The type refers to how the box behaves in terms of page flow and in relation to other boxes on the page. Boxes have an inner display type and an outer display type.

**Outer display type**
If a box has an outer display type of block, then:

The box will break onto a new line.

The width and height properties are respected.

Padding, margin and border will cause other elements to be pushed away from the box.

If width is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

Some HTML elements, such as <h1> and <p>, use block as their outer display type by default.

If a box has an outer display type of inline, then:

The box will not break onto a new line.

The width and height properties will not apply.

Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.

Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

Some HTML elements, such as <a>, <span>, <em> and <strong> use inline as their outer display type by default.

**Inner display type**
Boxes also have an inner display type, which dictates how elements inside that box are laid out.

Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are also laid out in normal flow and behave as block or inline boxes.

You can change the inner display type for example by setting display: flex;. The element will still use the outer display type block but this changes the inner display type to flex. Any direct children of this box will become flex items and behave according to the Flexbox specification.

Examples of different display types
The example below has three different HTML elements, all of which have an outer display type of block.

A paragraph with a border added in CSS. The browser renders this as a block box. The paragraph starts on a new line and extends the entire available width.

A list, which is laid out using display: flex. This establishes flex layout for the children of the container, which are flex items. The list itself is a block box and — like the paragraph — expands to the full container width and breaks onto a new line.

A block-level paragraph, inside which are two <span> elements. These elements would normally be inline, however, one of the elements has a class of "block" which gets set to display: block.

The <span> elements in the first paragraph are inline by default and so do not force line breaks.

The <ul> element that is set to display: inline-flex creates an inline box containing some flex items.

The two paragraphs are both set to display: inline. The inline flex container and paragraphs all run together on one line rather than breaking onto new lines (as they would do if they were displaying as block-level elements).
To toggle between the display modes, you can change display: inline to display: block or display: inline-flex to display: flex.

The key thing to remember for now is: Changing the value of the display property can change whether the outer display type of a box is block or inline. This changes the way it displays alongside other elements in the layout.

**What is the CSS box model?**
The CSS box model as a whole applies to block boxes and defines how the different parts of a box — margin, border, padding, and content — work together to create a box that you can see on a page. Inline boxes use just some of the behavior defined in the box model.

To add complexity, there is a standard and an alternate box model. By default, browsers use the standard box model.

arts of a box
Making up a block box in CSS we have the:

Content box: The area where your content is displayed; size it using properties like inline-size and block-size or width and height.

Padding box: The padding sits around the content as white space; size it using padding and related properties.

Border box: The border box wraps the content and any padding; size it using border and related properties.

Margin box: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using margin and related properties.

The standard CSS box model
In the standard box model, if you give a box an inline-size and a block-size (or width and a height) attributes, this defines the inline-size and block-size (width and height in horizontal languages) of the content box. Any padding and border is then added to those dimensions to get the total size taken up by the box.

NOTE: The margin is not counted towards the actual size of the box — sure, it affects the total space that the box will take up on the page, but only the space outside the box. The box's area stops at the border — it does not extend into the margin.

The alternative CSS box model
In the alternative box model, any width is the width of the visible box on the page. The content area width is that width minus the width for the padding and border (see image below). No need to add up the border and padding to get the real size of the box.

To turn on the alternative model for an element, you can set box-sizing: border-box on it.

To use the alternative box model for all of your elements (which is a common choice among developers), set the box-sizing property on the <html> element and set all other elements to inherit that value:

**Playing with box models**
In the example below, you can see two boxes. Both have a class of .box, which gives them the same width, height, margin, border, and padding. The only difference is that the second box has been set to use the alternative box model.

**Use browser DevTools to view the box model**

Your browser developer tools can make understanding the box model far easier. If you inspect an element in Firefox's DevTools, you can see the size of the element plus its margin, padding, and border.

**Margins, padding, and borders**
The properties used in that example are shorthands and allow us to set all four sides of the box at once. These shorthands also have equivalent longhand properties, which allow control over the different sides of the box individually.

**Margin**
The margin is an invisible space around your box. It pushes other elements away from the box. Margins can have positive or negative values. Setting a negative margin on one side of your box can cause it to overlap other things on the page. Whether you are using the standard or alternative box model, the margin is always added after the size of the visible box has been calculated.

We can control all margins of an element at once using the margin property, or each side individually using the equivalent longhand properties:

EXAMPLES:
margin-top
margin-right
margin-bottom
margin-left

**Margin collapsing**
Depending on whether two elements whose margins touch have positive or negative margins, the results will be different:

Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.
Two negative margins will collapse and the smallest (furthest from zero) value will be used.
If one margin is negative, its value will be subtracted from the total.

A number of rules dictate when margins do and do not collapse.

**Borders**
The border is drawn between the margin and the padding of a box. If you are using the standard box model, the size of the border is added to the width and height of the content box. If you are using the alternative box model then the size of the border makes the content box smaller as it takes up some of that available width and height of the element box.

For styling borders, there are a large number of properties — there are four borders, and each border has a style, width, and color that we might want to manipulate.

You can set the width, style, or color of all four borders at once using the border property.

To set the properties of each side individually, use:

border-top
border-right
border-bottom
border-left

To set the width, style, or color of all sides, use:

border-width
border-style
border-color
To set the width, style, or color of a single side, use one of the more granular longhand properties:

border-top-width
border-top-style
border-top-color
border-right-width
border-right-style
border-right-color
border-bottom-width
border-bottom-style
border-bottom-color
border-left-width
border-left-style
border-left-color

**Padding**
The padding sits between the border and the content area and is used to push the content away from the border. Unlike margins, you cannot have a negative padding. Any background applied to your element will display behind the padding.

The padding property controls the padding on all sides of an element. To control each side individually, use these longhand properties:

padding-top
padding-right
padding-bottom
padding-left

You can change the values for padding on the class .box to see that this changes where the text begins in relation to the box. You can also change the padding on the class .container to create space between the container and the box. You can change the padding on any element to create space between its border and whatever is inside the element.

**The box model and inline boxes**
All of the above fully applies to block boxes. Some of the properties can apply to inline boxes too, such as those created by a <span> element.

In the example below, we have a <span> inside a paragraph. We have applied a width, height, margin, border, and padding to it. You can see that the width and height are ignored. The vertical margin, padding, and border are respected but don't change the relationship of other content to our inline box. The padding and border overlap other words in the paragraph. The horizontal padding, margins, and borders move other content away from the box.

**Using display: inline-block**
display: inline-block is a special value of display, which provides a middle ground between inline and block. Use it if you do not want an item to break onto a new line, but do want it to respect width and height and avoid the overlapping seen above.

An element with display: inline-block does a subset of the block things we already know about:

The width and height properties are respected.
padding, margin, and border will cause other elements to be pushed away from the box.
It does not, however, break onto a new line, and will only become larger than its content if you explicitly add width and height properties.

Where this can be useful is when you want to give a link a larger hit area by adding padding. <a> is an inline element like <span>; you can use display: inline-block to allow padding to be set on it, making it easier for a user to click the link.

You see this fairly frequently in navigation bars. The navigation below is displayed in a row using flexbox and we have added padding to the <a> element as we want to be able to change the background-color when the <a> is hovered. The padding appears to overlap the border on the <ul> element. This is because the <a> is an inline element.



Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”? 
List and describe the four parts of an HTML elements box as referred to by the box model. 

<h1>Learn JS</h1>

**Arrays**

What is an array?
Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value.

If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. This would be much longer to write out, less efficient, and more error-prone.

Creating arrays
Arrays consist of square brackets and items that are separated by commas.

Suppose we want to store a shopping list in an array. Paste the following code into the console:
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);
Copy to Clipboard
In the above example, each item is a string, but in an array we can store various data types — strings, numbers, objects, and even other arrays. We can also mix data types in a single array — we do not have to limit ourselves to storing only numbers in one array, and in another only strings. For example:
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]];

Finding the length of an array
You can find out the length of an array (how many items are in it) in exactly the same way as you find out the length (in characters) of a string — by using the length property. Try the following:

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping.length);  // 5

Accessing and modifying array items
Items in an array are numbered, starting from zero. This number is called the item's index. So the first item has index 0, the second has index 1, and so on. You can access individual items in the array using bracket notation and supplying the item's index, in the same way that you accessed the letters in a string.

Enter the following into your console:
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]);
// returns "bread"
Copy to Clipboard
You can also modify an item in an array by giving a single array item a new value. Try this:
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
Copy to Clipboard

NOTE: We've said it before, but just as a reminder — computers start counting from 0!

Note that an array inside an array is called a multidimensional array. You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together. For example, to access one of the items inside the array that is the third item inside the random array (see previous section), we could do something like this:
const random = ['tree', 795, [0, 1, 2]];
random[2][2];

**Finding the index of items in an array**
If you don't know the index of an item, you can use the indexOf() method. The indexOf() method takes an item as an argument and will either return the item's index or -1 if the item is not in the array:

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')); // -1

**Adding items**
To add one or more items to the end of an array we can use push(). Note that you need to include one or more items that you want to add to the end of your array.

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

The new length of the array is returned when the method call completes. If you wanted to store the new array length in a variable, you could do something like this:

const cities = ['Manchester', 'Liverpool'];
const newLength = cities.push('Bristol');
console.log(cities);     // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength);  // 3

To add an item to the start of the array, use unshift():

const cities = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(cities);     // [ "Edinburgh", "Manchester", "Liverpool" ]

**Removing items**
To remove the last item from the array, use pop().

const cities = ['Manchester', 'Liverpool'];
cities.pop();
console.log(cities);     // [ "Manchester" ]

The pop() method returns the item that was removed. To save that item in a new variable, you could do this:

const cities = ['Manchester', 'Liverpool'];
const removedCity = cities.pop();
console.log(removedCity);   // "Liverpool"

To remove the first item from an array, use shift():

const cities = ['Manchester', 'Liverpool'];
cities.shift();
console.log(cities);     // [ "Liverpool" ]

If you know the index of an item, you can remove it from the array using splice():

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed. So you can remove more than one item:

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities);     // [ "Manchester", "Carlisle" ]

**Accessing every item**
Very often you will want to access every item in the array. You can do this using the for...of statement:

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}

Sometimes you will want to do the same thing to each item in an array, leaving you with an array containing the changed items. You can do this using map(). The code below takes an array of numbers and doubles each number:

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);  // [ 10, 4, 14, 12 ]

We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.

Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter(). The code below takes an array of strings and returns an array containing just the strings that are greater than 8 characters long:

function isLong(city) {
  return city.length > 8;
}
const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);
console.log(longer);  // [ "Liverpool", "Edinburgh" ]

Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array, passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.

**Converting between strings and arrays**
Often you'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form and then do things to them, like display them in a data table. To do this, we can use the split() method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

NOTE: Okay, this is technically a string method, not an array method, but we've put it in with arrays as it goes well here.

**Active learning: Printing those products**

Below the // number 1 comment are a number of strings, each one containing a product name and price separated by a colon. We'd like you to turn this into an array and store it in an array called products.

Below the // number 2 comment, start a for...of() loop to go through every item in the products array.

Below the // number 3 comment we want you to write a line of code that splits the current array item (name:price) into two separate items, one containing just the name and one containing just the price. If you are not sure how to do this, consult the Useful string methods article for some help, or even better, look at the Converting between strings and arrays section of this article.

As part of the above line of code, you'll also want to convert the price from a string to a number. If you can't remember how to do this, check out the first strings article.

There is a variable called total that is created and given a value of 0 at the top of the code. Inside the loop (below // number 4) we want you to add a line that adds the current item price to that total in each iteration of the loop, so that at the end of the code the correct total is printed onto the invoice. You might need an assignment operator to do this.

We want you to change the line just below // number 5 so that the itemText variable is made equal to "current item name — $current item price", for example "Shoes — $23.99" in each case, so the correct information for each item is printed on the invoice. This is just simple string concatenation, which should be familiar to you.

Finally, below the // number 6 comment, you'll need to add a } to mark the end of the for...of() loop.

**Active learning: Top 5 searches**
A good use for array methods like push() and pop() is when you are maintaining a record of currently active items in a web app. In an animated scene for example, you might have an array of objects representing the background graphics currently displayed, and you might only want 50 displayed at once, for performance or clutter reasons. As new objects are created and added to the array, older ones can be deleted from the array to maintain the desired number.

NOTE: In a real search app, you'd probably be able to click the previous search terms to return to previous searches, and it would display actual search results!

**Expressions and operators**
This chapter describes JavaScript's expressions and operators, including assignment, comparison, arithmetic, bitwise, logical, string, ternary and more.

At a high level, an expression is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.

The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to 7.

The expression 3 + 4 is an example of the second type. This expression uses the + operator to add 3 and 4 together and produces a value, 7. However, if it's not eventually part of a bigger construct (for example, a variable declaration like const z = 3 + 4), its result will be immediately discarded — this is usually a programmer mistake because the evaluation doesn't produce any effects.

**Assignment operators**
An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x.

**Loops**

**Why are loops useful?**
Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop, or the same code will run but with different variables.

Most of the time when you use a loop, you will have a collection of items and want to do something with every item.

One type of collection is the Array, which we met in the Arrays chapter of this course. But there are other collections in JavaScript as well, including Set and Map.

**Looping through collections with a for loop**
You can use a for loop to iterate through a collection, instead of a for...of loop.

**Exiting loops with break**
If you want to exit a loop before all the iterations have been completed, you can use the break statement. We already met this in the previous article when we looked at switch statements — when a case is met in a switch statement that matches the input expression, the break statement immediately exits the switch statement and moves on to the code after it.

Skipping iterations with continue
The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.

It's the same with loops — a break statement will immediately exit the loop and make the browser move on to any code that follows it.

What data types can you store inside of an Array? 

Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?
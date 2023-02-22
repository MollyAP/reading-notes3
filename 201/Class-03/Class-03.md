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

When should you use an unordered list in your HTML document?
How do you change the bullet style of unordered list items?
When should you use an ordered list vs an unorder list in your HTML document?
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



Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?
List and describe the four parts of an HTML elements box as referred to by the box model.

<h1>Learn JS</h1>



What data types can you store inside of an Array?
Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?
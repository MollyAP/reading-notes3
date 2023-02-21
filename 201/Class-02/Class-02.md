**<h1>HTML text fundamentals</h1>**

<h2>The basics: headings and paragraphs</h2>

In HTML, each paragraph has to be wrapped in a <p> element, like so:

< p >I am a paragraph, oh yes I am.< /p >

Each heading has to be wrapped in a heading element:

< h1 >I am the title of the story.</ h1 >

There are six heading elements: < h1 >, < h2 >, < h3 >, < h4 >, < h5 >, and < h6 >. Each element represents a different level of content in the document; < h1 > represents the main heading, < h2 > represents subheadings, < h3 > represents sub-subheadings, and so on.

Implementing structural hierarchy
For example, in this story, the <h1> element represents the title of the story, the <h2> elements represent the title of each chapter, and the <h3> elements represent sub-sections of each chapter:

<h1>The Crushing Bore</h1>

<p>By Chris Mills</p>

<h2>Chapter 1: The dark night</h2>

<p>
  It was a dark night. Somewhere, an owl hooted. The rain lashed down on the…
</p>

<h2>Chapter 2: The eternal silence</h2>

<p>Our protagonist could not so much as a whisper out of the shadowy figure…</p>

<h3>The specter speaks</h3>

<p>
  Several more hours had passed, when all of a sudden the specter sat bolt
  upright and exclaimed, "Please have mercy on my soul!"
</p>

A few best practices as you create such structures:

Preferably, you should use a single < h1 > per page—this is the top level heading, and all others sit below this in the hierarchy.

Make sure you use the headings in the correct order in the hierarchy. Don't use < h3 > elements to represent subheadings, followed by < h2 > elements to represent sub-subheadings—that doesn't make sense and will lead to weird results.

Of the six heading levels available, you should aim to use no more than three per page, unless you feel it is necessary. Documents with many levels (for example, a deep heading hierarchy) become unwieldy and difficult to navigate. On such occasions, it is advisable to spread the content over multiple pages if possible.

<h2>Why do we need semantics?</h2>

Semantics are relied on everywhere around us—we rely on previous experience to tell us what the function of an everyday object is; when we see something, we know what its function will be. So, for example, we expect a red traffic light to mean "stop," and a green traffic light to mean "go." Things can get tricky very quickly if the wrong semantics are applied. (Do any countries use red to mean "go"? We hope not.)

In a similar way, we need to make sure we are using the correct elements, giving our content the correct meaning, function, or appearance. In this context, the <h1> element is also a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."

< h1 >This is a top level heading</ h1 >

By default, the browser will give it a large font size to make it look like a heading (although you could style it to look like anything you wanted using CSS). More importantly, its semantic value will be used in multiple ways, for example by search engines and screen readers (as mentioned above).

On the other hand, you could make any element look like a top level heading. Consider the following:

< span style="font-size: 32px; margin: 21px 0; display: block;">Is this a top level heading?</ span>

This is a <span> element. It has no semantics. You use it to wrap content when you want to apply CSS to it (or do something to it with JavaScript) without giving it any extra meaning. CSS was applied to it to make it look like a top level heading, but since it has no semantic value, it will not get any of the extra benefits described above.

<h2>Lists</h2>

**Unordered**
Unordered lists are used to mark up lists of items for which the order of the items doesn't matter. Let's take a shopping list as an example:
milk
eggs
bread
hummus

Every unordered list starts off with a < ul > element—this wraps around all the list items:
<ul>
milk
eggs
bread
hummus
</ul>

The last step is to wrap each list item in a <li> (list item) element:

<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>

**Ordered**
Ordered lists are lists in which the order of the items does matter. Let's take a set of directions as an example:
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road

The markup structure is the same as for unordered lists, except that you have to wrap the list items in an <ol> element, rather than <ul>:

<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>

**Nesting lists**
It is perfectly OK to nest one list inside another one. You might want to have some sub-bullets sitting below a top-level bullet. Let's take the second list from our recipe example:
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.</li>
  <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
  <li>If you want a smooth hummus, process it for a longer time.</li>
</ol>

Since the last two bullets are very closely related to the one before them (they read like sub-instructions or choices that fit below that bullet), it might make sense to nest them inside their own unordered list and put that list inside the current fourth bullet. This would look like so:

<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>
    Process all the ingredients into a paste.
    <ul>
      <li>
        If you want a coarse "chunky" hummus, process it for a short time.
      </li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>

<h2>Description lists</h2>
The purpose of these lists is to mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers.

soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information

Description lists use a different wrapper than the other list types — <dl>; in addition each term is wrapped in a <dt> (description term) element, and each description is wrapped in a <dd> (description definition) element.

EXAMPLE:
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought, or piece of
    additional background information.
  </dd>
</dl>

The browser default styles will display description lists with the descriptions indented somewhat from the terms.

<h2>Quotations</h2>

**Blockquotes**

If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere else, you should wrap it inside a <blockquote> element to signify this, and include a URL pointing to the source of the quote inside a cite attribute. 

For example, the following markup is taken from the MDN <blockquote> element page:

<p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block

Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>

To turn this into a block quote, we would just do this:

<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

Browser default styling will render this as an indented paragraph, as an indicator that it is a quote; the paragraph above the quotation is there to demonstrate that.

**Abbreviations**
Another fairly common element you'll meet when looking around the Web is <abbr> — this is used to wrap around an abbreviation or acronym. When including either, provide a full expansion of the term in plain text on first use, along with the <abbr> to mark up the abbreviation. This provides a hint to user agents on how to announce/display the content while informing all users what the abbreviation means.

1) Why is it important to use semantic elements in our HTML? Semantics make code clearer and easier to maintain, as well as helping your site to be more accessible.

2) How many levels of headings are there in HTML? there are six levels of heading in HTML: h1, h2, h3, h4, h5, and h6, 1 being the biggest in size and 6 being the smallest in size.

3)What are some uses for the <sup> and <sub> elements? When marking up items like dates, chemical formulae, and mathematical equations so they have the correct meaning.

4) When using the <abbr> element, what attribute must be added to provide the full expansion of the term? The 'title' attribute must be used.

**<h1>Learning with CSS</h1>**

**External stylesheet**
An external stylesheet contains CSS in a separate file with a .css extension. This is the most common and useful method of bringing CSS to a document. You can link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet.

Internal stylesheet
An internal stylesheet resides within an HTML document. To create an internal stylesheet, you place CSS inside a <style> element contained inside the HTML <head>.

**Inline styles**
Inline styles are CSS declarations that affect a single HTML element, contained within a style attribute.

Avoid using CSS in this way, when possible. It is the opposite of a best practice. First, it is the least efficient implementation of CSS for maintenance. One styling change might require multiple edits within a single web page. Second, inline CSS also mixes (CSS) presentational code with HTML and content, making everything more difficult to read and understand. Separating code and content makes maintenance easier for all who work on the website.

There are a few circumstances where inline styles are more common. You might have to resort to using inline styles if your working environment is very restrictive. For example, perhaps your CMS only allows you to edit the HTML body.

**Selectors**
A selector targets HTML to apply styles to content.

**Properties and values**
At its most basic level, CSS consists of two components:

Properties: These are human-readable identifiers that indicate which stylistic features you want to modify. For example, font-size, width, background-color.

Values: Each property is assigned a value. This value indicates how to style the property.

EXAMPLE: The property name is color and the value is blue.

When a property is paired with a value, this pairing is called a CSS declaration. CSS declarations are found within CSS Declaration Blocks. In the example below, highlighting identifies the CSS declaration block.

NOTE: If a property is unknown, or if a value is not valid for a given property, the declaration is processed as invalid. It is completely ignored by the browser's CSS engine.

In CSS (and other web standards), it has been agreed that US spelling is the standard where there is language variation or uncertainty. For example, colour should be spelled color, as colour will not work.

**Functions**
While most values are relatively simple keywords or numeric values, there are some values that take the form of a function.

The calc() function
An example would be the calc() function, which can do simple math within CSS:
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>

A function consists of the function name, and parentheses to enclose the values for the function. In the case of the calc() example above, the values define the width of this box to be 90% of the containing block width, minus 30 pixels. The result of the calculation isn't something that can be computed in advance and entered as a static value.

**Transform functions**
Another example would be the various values for transform, such as rotate().

**@rules**
CSS @rules (pronounced "at-rules") provide instruction for what CSS should perform or how it should behave. Some @rules are simple with just a keyword and a value.

**Shorthands**
Some properties like font, background, padding, border, and margin are called shorthand properties. This is because shorthand properties set several values in a single line.

**Comments**
As with any coding work, it is best practice to write comments along with CSS. This helps you to remember how the code works as you come back later for fixes or enhancement. It also helps others understand the code.

CSS comments begin with /* and end with */.

"Commenting out" code is also useful for temporarily disabling sections of code for testing. In the example below, the rules for .special are disabled by "commenting out" the code.

**White space**
White space means actual spaces, tabs and new lines. Just as browsers ignore white space in HTML, browsers ignore white space inside CSS. The value of white space is how it can improve readability.

NOTE: Though white space separates values in CSS declarations, property names never have white space.

For example, these declarations are valid CSS:

margin: 0 auto;
padding-left: 10px;
Copy to Clipboard
But these declarations are invalid:

margin: 0auto;
padding- left: 10px;

Do you see the spacing errors? First, 0auto is not recognized as a valid value for the margin property. The entry 0auto is meant to be two separate values: 0 and auto. Second, the browser does not recognize padding- as a valid property. The correct property name (padding-left) is separated by an errant space.

You should always make sure to separate distinct values from one another by at least one space. Keep property names and property values together as single unbroken strings.

1) What are ways we can apply CSS to our HTML? Three ways are external stylesheet, internal stylesheet, and inline styles.

2) Why should we avoid using inline styles? Inline styles is the least efficient implementation of CSS for maintenance. One styling change might require multiple edits within a single web page. Second, inline CSS also mixes (CSS) presentational code with HTML and content, making everything more difficult to read and understand.

3) Review the block of code below and answer the following questions:
What is representing the selector?
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro

Which components are the CSS declarations? Colons, Semi-colons, and curly brackets.

Which components are considered properties? Font-size, width, and background_color.
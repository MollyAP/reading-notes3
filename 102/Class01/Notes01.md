Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. 

EXAMPLE:
< h1 > The biggest size header </ h1 >
#/ The biggest size header
< h2 > The second biggest size ever < /h2 >
##/ The second biggest size ever (without slashes)

Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.
EXAMPLE:
This is a sentence.

This is another sentence.

Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs.
Do this:
Don't put tabs or spaces in front of your paragraphs.

Keep lines left-aligned like this.

Don't do this:

    This can result in unexpected formatting problems.

  Don't add tabs or spaces in front of paragraphs.

Line Breaks

To create a line break or new line (<br>), end a line with two or more spaces, and then type return.
Line Break Best Practices
You can use two or more spaces (commonly referred to as “trailing whitespace”) for line breaks in nearly every Markdown application, but it’s controversial. It’s hard to see trailing whitespace in an editor, and many people accidentally or intentionally put two spaces after every sentence. For this reason, you may want to use something other than trailing whitespace for line breaks. If your Markdown application supports HTML, you can use the <br> HTML tag.

Do this:
First line with two spaces after.  
And the next line.

First line with the HTML tag after.<br>
And the next line.

Don't do this:

First line with a backslash after.\
And the next line.

First line with nothing after.
And the next line.

Emphasis

You can add emphasis by making text bold or italic.

Bold

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.
EXAMPLE:
I just love **bold text**.
I just love __bold text__.
Love**is**bold	
Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold the middle of a word for emphasis.
EXAMPLE:
Love__is__bold

Italic

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.
EXAMPLE:
Italicized text is the *cat's meow*.
Italicized text is the _cat's meow_.
A*cat*meow.

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to italicize the middle of a word for emphasis.
EXAMPLE:
A_cat_meow.

Bold and Italic

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.
EXAMPLE:
This text is ***really important***.
This text is ___really important___.
This text is __*really important*__.
This text is **_really important_**.
This is really***very***important text.
 Note: The order of the em and strong tags might be reversed depending on the Markdown processor you're using.
Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold and italicize the middle of a word for emphasis.
EXAMPLE:
This is really___very___important text.

Blockquotes

To create a blockquote, add a > in front of a paragraph.

> Dorothy followed her through many of the beautiful rooms in her castle.

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.
EXAMPLE:
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

Nested Blockquotes

Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.
EXAMPLE:
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

Blockquotes with Other Elements
Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.
1.) First item
2.) Second item
3.) Third item
4.) Fourth item 
Without parenthesis:
1. First item
2. Second item
3. Third item
4. Fourth item 

Unordered Lists

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.
- )First item
- )Second item
- )Third item
- )Fourth item 

Without parenthesis:
- First item
- Second item
- Third item
- Fourth item 

Markdown applications don’t agree on how to handle different delimiters in the same list. For compatibility, don’t mix and match delimiters in the same list — pick one and stick with it.
EXAMPLE:
+ First item
* Second item
- Third item
+ Fourth item (DON'T do this)

Adding Elements in Lists

To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following examples.
NOTE: If things don't appear the way you expect, double check that you've indented the elements in the list four spaces or one tab.
Paragraphs
* )This is the first list item.
* )Here's the second list item.

    I need to add another paragraph below the second list item.

* )And here's the third list item. 

Without parenthesis:
* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item. 

Blockquotes
* )This is the first list item.
* )Here's the second list item.

    > )A blockquote would look great below the second list item.

* )And here's the third list item. 

Without parenthesis:
* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item. 

Images

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![ Tux, the Linux mascot ]( /assets/images/tux.png )

3. Close the file. (Without spaces.)

Code

To denote a word or phrase as code, enclose it in backticks (`).
EXAMPLE:
At the command prompt, type ` nano `.

Escaping Backticks

If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (``).
``Use `code` in your Markdown file.``

Horizontal Rules

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

Links

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

URLs and Email Addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.
EXAMPLE:
< https://www.markdownguide.org >
< fake@example.com > (Use without spaces)

Formatting Links

To emphasize links, add asterisks before and after the brackets and parentheses. To denote links as code, add backticks in the brackets.
EXAMPLE:
I love supporting the ** [EFF](https://eff.org) **.
This is the *[ Markdown Guide ]( https://www.markdownguide.org) *.
See the section on [ `code` ]( #code ).

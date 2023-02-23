<h1>Creating Hyperlinks</h1>

What is a hyperlink?
Hyperlinks are one of the most exciting innovations the Web has to offer. They've been a feature of the Web since the beginning, and are what makes the Web a web. Hyperlinks allow us to link documents to other documents or resources, link to specific parts of documents, or make apps available at a web address.

**Note**: A URL can point to HTML files, text files, images, text documents, video and audio files, or anything else that lives on the Web. If the web browser doesn't know how to display or handle the file, it will ask you if you want to open the file (in which case the duty of opening or handling the file is passed to a suitable native app on the device) or download the file (in which case you can try to deal with it later on).

**Anatomy of a link**
A basic link is created by wrapping the text or other content inside an <a> element and using the href attribute, also known as a Hypertext Reference, or target, that contains the web address.

**Block level links**
As mentioned before, almost any content can be made into a link, even block-level elements. If you want to make a heading element a link then wrap it in an anchor (<a>) element, this turns the heading into a link.

**Image links**
If you have an image you want to make into a link, use the <a> element to wrap the image file referenced with the <img> element.

**Adding supporting information with the title attribute**
Another attribute you may want to add to your links is title. The title contains additional information about the link, such as which kind of information the page contains, or things to be aware of on the website.

This gives us the following result and hovering over the link displays the title as a tooltip.

**Note**: A link title is only revealed on mouse hover, which means that people relying on keyboard controls or touchscreens to navigate web pages will have difficulty accessing title information. If a title's information is truly important to the usability of the page, then you should present it in a manner that will be accessible to all users, for example by putting it in the regular text.

The **root** of this directory structure is called *creating-hyperlinks*. When working locally with a website, you'll have one directory that contains the entire site. Inside the **root**, we have an *index.html* file and a *contacts.html*. In a real website, index.html would be our home page or landing page (a web page that serves as the entry point for a website or a particular section of a website.).

There are also two directories inside our root — pdfs and projects. These each have a single file inside them — a PDF (project-brief.pdf) and an index.html file, respectively. Note that you can have two index.html files in one project, as long as they're in different filesystem locations. The second index.html would perhaps be the main landing page for project-related information.

Same directory: If you wanted to include a hyperlink inside index.html (the top level index.html) pointing to contacts.html, you would specify the filename that you want to link to, because it's in the same directory as the current file. The URL you would use is contacts.html.

Moving down into subdirectories: If you wanted to include a hyperlink inside index.html (the top level index.html) pointing to projects/index.html, you would need to go down into the projects directory before indicating the file you want to link to. This is done by specifying the directory's name, then a forward slash, then the name of the file. The URL you would use is projects/index.html.

Moving back up into parent directories: If you wanted to include a hyperlink inside projects/index.html pointing to pdfs/project-brief.pdf, you'd have to go up a directory level, then back down into the pdfs directory. To go up a directory, use two dots — .. — so the URL you would use is ../pdfs/project-brief.pdf.

**Note**: You can combine multiple instances of these features into complex URLs, if needed, for example: ../../../complex/path/to/my/file.html.

Document fragments
It's possible to link to a specific part of an HTML document, known as a document fragment, rather than just to the top of the document. To do this you first have to assign an id attribute to the element you want to link to. It normally makes sense to link to a specific heading, then to link to that specific id, you'd include it at the end of the URL, preceded by a hash/pound symbol (#).

**Absolute versus relative URLs**
Two terms you'll come across on the Web are absolute URL and relative URL:

absolute URL: Points to a location defined by its absolute location on the web, including protocol and domain name. An absolute URL will always point to the same location, no matter where it's used.

relative URL: Points to a location that is relative to the file you are linking from, more like what we looked at in the previous section.

Of course, the location of the project-brief.pdf file and pdfs folder won't suddenly change because you moved the index.html file — this would make your link point to the wrong place, so it wouldn't work if clicked on.

**Link best practices**
There are some best practices to follow when writing links.

Use clear link wording
It's easy to throw links up on your page. That's not enough. We need to make our links accessible to all readers, regardless of their current context and which tools they prefer.

Screen reader users like jumping around from link to link on the page, and reading links out of context.

Search engines use link text to index target files, so it is a good idea to include keywords in your link text to effectively describe what is being linked to.

Visual readers skim over the page rather than reading every word, and their eyes will be drawn to page features that stand out, like links. They will find descriptive link text useful.

Other tips:

Don't repeat the URL as part of the link text — URLs look ugly, and sound even uglier when a screen reader reads them out letter by letter.

Don't say "link" or "links to" in the link text — it's just noise. Screen readers tell people there's a link. Visual users will also know there's a link, because links are generally styled in a different color and underlined (this convention generally shouldn't be broken, as users are used to it).

Keep your link text as short as possible — this is helpful because screen readers need to interpret the entire link text.

Minimize instances where multiple copies of the same text are linked to different places. This can cause problems for screen reader users, if there's a list of links out of context that are labeled "click here", "click here", "click here".

**Use the download attribute when linking to a download**
When you are linking to a resource that's to be downloaded rather than opened in the browser, you can use the download attribute to provide a default save filename.

**QnA's**

To create a basic link, we wrap text or other content inside what element? by wrapping the text or other content inside an <a> element and using the href attribute that contains the web address.

The href attribute contains what information? It contains the web address.

What are some ways we can ensure links on our pages are accessible to all readers? By adding supporting information along with the title attribute.

<h1>CSS Layout: Normal Flow CSS Layout: Positioning</h1>

**How are elements laid out by default?**
The process begins as the boxes of individual elements are laid out in such a way that any padding, border, or margin they happen to have is added to their content. This is what we call the box model.

By default, a block level element's content fills the available inline space of the parent element containing it and the element grows along the block dimension to accommodate its content. The size of inline elements is just the size of their content. You can't set width or height on inline elements — they just sit inside the content of block level elements — except for images. Unlike other inline elements, images can be resized without changing their display property. If you want to control the size of an inline element in this manner, you need to set it to behave like a block level element (e.g., with display: block; or display: inline-block;, which mixes characteristics from both).

Inline elements behave differently. They don't appear on new lines; instead, they all sit on the same line along with any adjacent (or wrapped) text content as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing content will move down to a new line.

If two vertically adjacent elements both have a margin set on them and their margins touch, the larger of the two margins remains and the smaller one disappears. This is known as **margin collapsing**. Collapsing margins is only relevant in the vertical direction.

**QnA's**

What is meant by “normal flow”? The way that webpage elements lay themselves out if you haven't changed their layout.

What are a few differences between block-level and inline elements? A block level element's content fills the available inline space of the parent element containing it and the element grows along the block dimension to accommodate its content. The size of inline elements is just the size of their content. You can't set width or height on inline elements, they just sit inside the content of block level elements except for images.

*Static* positioning is the default for every html element.

Name a few advantages to using absolute positioning on an element. A Positioned element no longer exists in the normal document flow. Instead, it sits on its own layer separate from everything else, which means that we can create isolated UI features that don't interfere with the layout of other elements on the page. For example, popup information boxes, control menus, rollover panels, UI features that can be dragged and dropped anywhere on the page, and so on. Also rather than positioning the element based on its relative position within the normal document flow, they specify the distance the element should be from each of the containing element's sides.

What is a key difference between fixed positioning and absolute positioning? Absolute positioning fixes an element in place relative to its nearest positioned ancestor (the initial containing block if there isn't one), whereas Fixed positioning usually fixes an element in place relative to the visible portion of the viewport.

<h1>Functions — reusable blocks of code</h1>

Another essential concept in coding is functions, which allow you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times. In this article we'll explore fundamental concepts behind functions such as basic syntax, how to invoke and define them, scope, and parameters.

**Where do I find functions?**
In JavaScript, you'll find functions everywhere. In fact, we've been using functions all the way through the course so far; we've just not been talking about them very much. Now is the time, however, for us to start talking about functions explicitly, and really exploring their syntax.

Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses — () — and you're not using a common built-in language structure like a for loop, while or do...while loop, or if...else statement, you are making use of a function.

The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself. In fact, some of the code you are calling when you invoke (a fancy word for run, or execute) a built in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript.

**Functions versus methods**
Functions that are part of objects are called methods. You don't need to learn about the inner workings of structured JavaScript objects yet — you can wait until our later module that will teach you all about the inner workings of objects, and how to create your own. For now, we just wanted to clear up any possible confusion of method versus function — you are likely to meet both terms as you look at the available related resources across the Web.

The built-in code we've made use of so far come in both forms: functions and methods. You can check the full list of the built-in functions, as well as the built-in objects and their corresponding methods here.

You've also seen a lot of *custom functions* in the course so far — functions defined in your code, not inside the browser. Anytime you saw a custom name with parentheses straight after it, you were using a custom function.

This function draws 100 random circles inside a <canvas> element. Every time we want to do that, we can just invoke the function, and rather than having to write all that code out again every time we want to repeat it. And functions can contain whatever code you like — you can even call other functions from inside functions. The above function for example calls the random() function three times.

We needed this function because the browser's built-in Math.random() function only generates a random decimal number between 0 and 1. We wanted a random whole number between 0 and a specified number.

**Invoking functions**
You are probably clear on this by now, but just in case, to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.

**Note**: This form of creating a function is also known as function declaration. It is always hoisted, so you can call function above function definition and it will work fine.

**Function parameters**
Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.

**Note**: Parameters are sometimes called arguments, properties, or even attributes.

**Note**: When you need to specify multiple parameters, they are separated by commas.

**Optional parameters**
Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array join() function's parameter is optional.

If no parameter is included to specify a joining/delimiting character, a comma is used by default.

**Default parameters**
If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value.

**Anonymous functions and arrow functions**

You can also create a function that doesn't have a name, this is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.

**Note**: This form of creating a function is also known as function expression. Unlike function declaration, function expressions are not hoisted.

For example, let's say you want to run some code when the user types into a text box. To do this you can call the addEventListener() function of the text box. This function expects you to pass it (at least) two parameters:

the name of the event to listen for, which in this case is keydown
a function to run when the event happens.
When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed. Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener().

**Arrow functions**
If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>.

If the function only has one line in the curly brackets, you omit the curly brackets. If the function only takes one parameter, you can also omit the brackets around the parameter.

Finally, if your function needs to return a value, and contains only one line, you can also omit the return statement. In the following example we're using the map() method of Array to double every value in the original array.

The map() method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.

**Function scope and conflicts**
Let's talk a bit about scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.

Both functions you want to call are called greeting(), but you can only ever access the first.js file's greeting() function (the second one is ignored). In addition, an error results when attempting (in the second.js file) to assign a new value to the name variable — because it was already declared with const, and so can't be reassigned.

Keeping parts of your code locked away in functions avoids such problems, and is considered the best practice.

It is a bit like a zoo. The lions, zebras, tigers, and penguins are kept in their own enclosures, and only have access to the things inside their enclosures — in the same manner as the function scopes. If they were able to get into other enclosures, problems would occur. At best, different animals would feel really uncomfortable inside unfamiliar habitats — a lion or tiger would feel terrible inside the penguins' watery, icy domain. At worst, the lions and tigers might try to eat the penguins!
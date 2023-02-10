What is Wireframing?
Wireframing is a practice used that allows them to define and plan the information hierarchy of their design for a website, app, or product. This process focuses on how the designer or client wants the user to process information on a site.
Wireframe examples:
Wireframes drawn with paper and a pencil, or at a whiteboard.
Paper-prototypes, you can test with end users at every stage of ideation and design.
Switching later to software (after initially hand-drawing your wireframe) allows you to keep track of more detailed decisions.
Things to consider before you start wireframing:
Here are a number of ways different designers can structure the process from design to implementation:
 Wireframe > Interactive Prototype > Visual > Design
 Sketch > Code
 Sketch > Wireframe > Hi-Def Wireframe > Visual > Code
 Sketch > Wireframe > Visual > Code
If the task is very narrow and the visual design is either set or considered unimportant, then going from a sketch to coding/development makes sense, whereas if the time and resources and the business value are all high, then spending the time to make a high-definition wireframe and going through a cycle of testing with a fully realized interactive prototype makes better sense.
The best tools for wireframing:
Pen and paper.
UXPin: UXPin has a wide range of functionalities, but one of the best ones is how it facilitates building responsive, clickable prototypes directly in your browser.
InVision: InVision allows you to get feedback straight from your team and users through clickable mock-ups of your site design. It’s completely free too!
Wireframe.cc: Wireframe.cc provides you with the technology to create wireframes really quickly within your browser, the online version of pen and paper.
What is HTML?
HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.
The opening tag: This consists of the name of the element (in this case, p), wrapped in opening and closing angle brackets.The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name.
The content: This is the content of the element, which in this case, is just text.
The element: The opening tag, the closing tag, and the content together comprise the element.
(element) opening tag ---> <p> (content)--->my cat is grumpy</p> <---closing tag
Attributes contain extra information about the element that you don't want to appear in the actual content. Here, class is the attribute name and editor-note is the attribute value. The class attribute allows you to give the element a non-unique identifier that can be used to target it (and any other elements with the same class value) with style information and other things. Some attributes have no value, such as required. 
Attributes that set a value always have:
A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
The attribute name followed by an equal sign.
The attribute value wrapped by opening and closing quotation marks.
Nesting - Placing elements inside other elements too.
Void Elements - Elements that have no content.
Heading elements allow you to specify that certain parts of your content are headings — or subheadings. HTML contains 6 heading levels, <h1> - <h6>, although you'll commonly only use 3 to 4 at most.
Links are very important — they are what makes the web a web! To add a link, we need to use a simple element — <a> — "a" being the short form for "anchor"
In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)
In CSS, consider styling a list with li elements representing different types of fruits. Would you know what part of the DOM is being selected with div > ul > li, or .fruits__item?
n HTML, for example, the <h1> element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."
HTML should be coded to represent the data that will be populated and not based on its default presentation styling. Presentation (how it should look), is the sole responsibility of CSS.
Semantic elements examples:
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>

"Hypertext" refers to links that connect web pages to one another, either within a single website or between websites.
HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>
An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by "<" and ">". The name of an element inside a tag is case insensitive. That is, it can be written in uppercase, lowercase, or a mixture. For example, the <title> tag can be written as <Title>, <TITLE>, or in any other way. However, the convention and recommended practice is to write tags in lowercase.
he <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
Metadata contains information about the page. This includes information about styles, scripts and data to help software

<address> - The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
<article> - The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable 
<aside> - <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
<footer> - The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents.
<header> - The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.
The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.
<main> - The <main> HTML element represents the dominant content of the body of a document.
<nav> - The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.
<section> - The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. 
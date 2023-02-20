<h1>How the web works</h1>

**<h2>Clients and servers</h2>**

Computers connected to the internet are called **clients** and **servers**.

**Clients** are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).

**Servers** are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

<h2>the other parts of the toolbox</h2>

**Internet connection**: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.

**TCP/IP**: **Transmission Control Protocol** and **Internet Protocol** are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).

**DNS**: **Domain Name System** is like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's IP address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.

**HTTP**: **Hypertext Transfer Protocol** is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.

**Component files**: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
**Code files**: Websites are built primarily from HTML, CSS, and JavaScript.

**Assets**: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

<h2>So what happens?</h2>

When you type a web address into your browser, The browser goes to the DNS server, and finds the real address of the server that the website lives on.

The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.

If the server approves the client's request, the server sends the client a "200 OK" message, and then starts sending the website's files to the browser as a series of small chunks called data packets.

The browser assembles the small chunks into a complete web page and displays it to you).

<h2>Order in which components are parsed</h2>

When browsers send requests to servers for HTML files, those HTML files often contain < link > elements referencing external CSS stylesheets and < script > elements referencing external JavaScript scripts.

The browser parses the HTML file first, and that leads to the browser recognizing any < link >-element references to external CSS stylesheets and any < script >-element references to scripts.

As the browser parses the HTML, it sends requests back to the server for any CSS files it has found from < link > elements, and any JavaScript files it has found from < script > elements, and from those, then parses the CSS and JavaScript.
The browser generates an in-memory DOM tree from the parsed HTML, generates an in-memory CSSOM structure from the parsed CSS, and compiles and executes the parsed JavaScript.

As the browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JavaScript, a visual representation of the page is painted to the screen, and the user sees the page content and can begin to interact with it.

**Packets** are the format in which the data is sent from server to client.  

When data is sent across the web, it is sent in thousands of small chunks. There are multiple reasons why data is sent in small packets. They are sometimes dropped or corrupted, and it's easier to replace small chunks when this happens.

Additionally, the packets can be routed along different paths, making the exchange faster and allowing many different users to download the same website at the same time.



<h2>What tools do proffesionals use?</h2>

**A computer**. For serious web development, it's better to invest in a desktop or laptop computer running Windows, macOS or Linux.

**A text editor**, to write code in. This could be a text editor (e.g. Visual Studio Code, Notepad++, Sublime Text, GNU Emacs, or VIM), or a hybrid editor (e.g. Dreamweaver or WebStorm). Office document editors are not suitable, as they rely on hidden elements that interfere with the rendering engines used by web browsers.

**Web browsers**, to test code in. The most-used browsers at this time are Firefox, Chrome, Opera, Safari, Internet Explorer and Microsoft Edge. You should also test how your site performs on mobile devices and on any old browsers your target audience may still be using (such as IE 8–10). Lynx, a text-based terminal web browser, is great for seeing how your site is experienced by visually-impaired users.

A **Graphics editor**, like GIMP, Figma, Paint.NET, Photoshop, Sketch or XD

A **version control system**, to manage files on servers, collaborate on a project with a team, share code and assets and avoid editing conflicts. Right now, Git is the most popular version control system along with the GitHub or GitLab hosting service.

An **FTP program**, used on older web hosting accounts to manage files on servers (Git is increasingly replacing FTP for this purpose). There are loads of (S)FTP programs available *including* Cyberduck, Fetch and FileZilla.

An **automation system**, like Webpack, Grunt, or Gulp to automatically perform repetitive tasks, such as minifying code and running tests.

**Libraries**, **frameworks**, etc., to speed up writing common functionality. A **library** tends to be an existing JavaScript or CSS file that provides ready-rolled functionality for you to make use of in your code. A **framework** tends to take this idea further, offering a complete system with some custom syntaxes for you to write a web app on top of.

1) Compose a short poem describing how HTTP sends data between computers.

2) Describe how HTML, CSS, and JS files are “parsed” in the browser.

3) How can you find images to add to a Website?

4) How do you create a String vs a Number in JavaScript?

5) What is a Variable and why are they important in JavaScript?

<h1>Introduction to HTML</h1>

At its heart, HTML is a language made up of elements, which can be applied to pieces of text to give them different meaning in a document (Is it a paragraph? Is it a bulleted list? Is it part of a table?), structure a document into logical sections (Does it have a header? Three columns of content? A navigation menu?), and embed content such as images and videos into a page.

**Document and website structure**

Webpages can and will look pretty different from one another, but they all tend to share similar standard components, unless the page is displaying a fullscreen video or game, is part of some kind of art project, or is just badly structured:

header:
Usually a big strip across the top with a big heading, logo, and perhaps a tagline. This usually stays the same from one webpage to another.

navigation bar:
Links to the site's main sections; usually represented by menu buttons, links, or tabs. Like the header, this content usually remains consistent from one webpage to another — having inconsistent navigation on your website will just lead to confused, frustrated users. Many web designers consider the navigation bar to be part of the header rather than an individual component, but that's not a requirement; in fact, some also argue that having the two separate is better for accessibility, as screen readers can read the two features better if they are separate.

main content:
A big area in the center that contains most of the unique content of a given webpage, for example, the video you want to watch, or the main story you're reading, or the map you want to view, or the news headlines, etc. This is the one part of the website that definitely will vary from page to page!

sidebar:
Some peripheral info, links, quotes, ads, etc. Usually, this is contextual to what is contained in the main content (for example on a news article page, the sidebar might contain the author's bio, or links to related articles) but there are also cases where you'll find some recurring elements like a secondary navigation system.

footer:
A strip across the bottom of the page that generally contains fine print, copyright notices, or contact info. It's a place to put common information (like the header) but usually, that information is not critical or secondary to the website itself. The footer is also sometimes used for SEO purposes, by providing links for quick access to popular content.

**Note**: While the image illustrates the main sections of a document, which you can define with HTML. However, the appearance of the page - including the layout, colors, and fonts - is achieved by applying CSS to the HTML.



1) What is an HTML attribute? Attributes are special words used inside the opening tag to control the elements behavior.

2) Describe the Anatomy of an HTMl element. The anatomy of a HTML element includes the Angle Brackets, which tells the browser that it's an html tag; The Name of the tag usually abbreviation of a word or phrase that says what it does; Attributes, specific to tags and add additional information telling the browser what to do in the context of the tag; Attribute Values Specific info for a tag attribute; Dfeault Values, what the tag will do if no attributes with values are specified.

3) What is the Difference between </article> and </section> element tags? An article tag is used for specifying independant, self-contained content. A section tag defines sections in a document (ex: chapters, headers, footers, any section in a doc).

4) What Elements does a “typical” website include? Header, Navigation Bar, Main Content, Sidebar, Footer.

5) How does metadata influence Search Engine Optimization? Metadata tells search engines how to read and display sites on search engine result pages (SERPs).

6) How is the </meta> HTML tag used when specifying metadata? 
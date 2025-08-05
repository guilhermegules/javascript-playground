# An Introduction to JavaScript

> JavaScript was initially created to "make web pages alive".

The programs in this language are called scripts. They can be written right in a web page's HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don't need special preparation or compilation run.

### :information_source: Why is it called JavaScript?

When JavaScript was created, it initially has another name: "LiveScript". But Java was very popular at that time, so it was decided taht positioning a new language as a "younger brother" of Java would help.

But as it evolved. JavaScript became a fully independent language with its own specification called [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript), and now it has no relation to Java at all.

Today, JS can exevute not only in the browser. but also on the server, or actually on any device that has a special program called [the JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine)

### The JavaScript Engine

The browser has an embedded engine sometimes called a "JavaScript virtual Machine"

**JavaScript engine** is a computer program that execute JS code. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation(JIT) for improved performance. JavaScript engines are typically developed by web browsers vendors, the JS engine runs in concert with the rendering engine via the Document Object Model(DOM);

Different engines have different "codenames". For example:

- [V8](<https://en.wikipedia.org/wiki/V8_(JavaScript_engine)>) - in Chrome and Opera;
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) - in Firefox;
- ... There are other codenames like "Chakra" for IE, "ChakraCore" for Microsoft Edge, "Nitro" and "SquirreFish" for Safari, etc.

### :information_source: How do engines work?

1. The engine (embedded if it's a browser) reads ("parses") the script.
2. Then it converts ("compiles") the script to the machine language.
3. And then the machine code runs, pretty fast.

> The engine applies optimizations at each steo if the process. It even watches the compiled script as it runs, analyzes the data that flows through it and further optimizes the machine code based on that knowledge.

### What can in-browser JS do?

Modern JavaScript is "safe" programming language. It does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it.

JS capabilities greatly depend on the environment it's running. For instance, Node.js supports functions that allow JavaScript to read/write abitrary files, perform network requests, etc.

- Add new HTML to the page, change the existing contentm modify styles;
- React to user actions, run on mouse clicks, pointer movements, key presses;
- Send requests over the network to remote servers, download and upload files (so colled AJAX and COMMET technologies);
- Get and set cookies, ask questions to the visitor, show messages;
- Remember data on the client-side (local storage).

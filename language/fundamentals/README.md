# Fundamentals

### Modern markup

the `<script>` tag has a few atributes that are rarely used nowadays but can still be found in old code:

The type attribute: `<script type=…>`
The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript".
It’s not required anymore. Also, the modern HTML standard totally changed the meaning of this attribute.
Now, it can be used for JavaScript modules.

The language attribute: `<script language=…>`
This attribute was meant to show the language of the script.
This attribute no longer makes sense because JavaScript is the default language. There is no need to use it.

Comments before and after scripts.

`<script type="text/javascript"><!-- --></script>`

This trick isn’t used in modern JavaScript.
These comments hide JavaScript code from old browsers that didn’t know how to process the `<script>` tag.
Since browsers released in the last 15 years don’t have this issue, this kind of comment can help you identify really old code.

defer attribute:
A script that will not run until after the page has loaded

`<script src="demo_defer.js" defer></script>`

### The modern mode, "use strict"

For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn't change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code workingm most of such modifications are off by default. You need to explicitly enable them with a special directive: `"use strict"`.

#### “use strict”

The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

For example:

```
"use strict";

// this code works the modern way
...
```

### Should we "use strict"?

The question may sound obvious, but it’s not so.

One could recommend to start scripts with "use strict"… But you know what’s cool?

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

**So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.**

### Variables

:warning: An assignment without `use strict`

Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

```
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5
```

This is a bad practice and would cause an error in strict mode:

```
"use strict";

num = 5; // error: num is not defined
```

### Operators

#### Bitwise operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

- AND ( `&` )
- OR ( `|` )
- XOR ( `^` )
- NOT ( `~` )
- LEFT SHIFT ( `<<` )
- RIGHT SHIFT ( `>>` )
- ZERO-FILL RIGHT SHIFT ( `>>>` )

#### Logical Operators

There are three logical operators in JavaScript `|| (OR)`, `&& (AND)`, `! (NOT)`.

- `|| (OR)` usage example:
  - ```
    alert( null || 1 ); // 1 (1 is the first truthy value)
    alert( null || 0 || 1 ); // 1 (the first truthy value)
    alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
    ```
  - Evaluates operands from left to right
  - For each operand, converts it to boolean. If the result is `true`, stops and returns the original value of that operand
  - If all operands have been evaluated (all were `false`), returns the last operand
- `&& (AND)`
  - ```
    result = value1 && value2 && value3;
    // if the first operand is truthy,
    // AND returns the second operand:
    alert( 1 && 0 ); // 0
    alert( 1 && 5 ); // 5
    // if the first operand is falsy,
    // AND returns it. The second operand is ignored
    alert( null && 5 ); // null
    alert( 0 && "no matter what" ); // 0
    ```
  - Evaluates operands left to right
  - For each operand, converts it to a boolean, if the result if `false`, stops and return the original value of that operand
  - If all operands have been evaluated (all were `truthy`), return the last operand

### Interaction

We’re using a browser as a working environment, so basic UI functions will be:

- [prompt(question, [default])](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) - Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
- [confirm(question)](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) - Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
- [alert(message)](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) - Output a message.

### Data Types

- `number` for both floating-point and integer numbers
- `bigint` for integer numbers of arbitrary length
- `string` for text
- `boolean` for logical values
- `null` type with a single value, means "empty" or "does not exist"
- `undefined` type with a single value, means "not assigned"
- `object` complex data structure
- `symbol` unique identifiers

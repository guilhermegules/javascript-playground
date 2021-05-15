## Console log tricks and types

Some types of `console.log` for help to debug

## Chrome devtools:

- In Chrome devtools we can preserve log, checking the checkbox on `Console settings > Preserve log`
- In Chrome devtools we can get the previous used command with `$_`
- In Chrome devtools we can get the last selected elements with `$0`, `$1`, `$2`, `$3` or `$4`
- In Chrome devtools we can get the a object on our project with `$('your-element')`, obs: this command is overwrited if you have jquery in our project 
- In Chrome devtools we can get the all objects on our project with `$$('your-element')`
- In Chrome devtools we can get all the event listeners on a element `getEventListener(element)`

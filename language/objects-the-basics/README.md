# Objects: The basics

## Object

- Objects are used to store key/value collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language.
- We can create objects using `constructor syntax` or `object literal syntax`
  - ```
      let user = new Object(); // "object constructor" syntax
      let user = {};  // "object literal" syntax
    ```
- Creating object with properties:
  - ```
      const user = {
        name: "John",
        age: 30
      };
    ```
- Adding a new propertie to user `user.isAdmin = true`;
- Deleting properties with the `delete` keyword `delete user.age`
- We can access object properties with the square brackets `user["name"]`

## Computed properties

- It's possible to use square brackets in an Object Literal, when creating an object. That's caleed _computed properties_.

  - ```
      let fruit = prompt("Which fruit to buy?", "apple");
      let bag = {
        [fruit]: 5, // the name of the property is taken from the variable fruit
      };

      alert( bag.apple ); // 5 if fruit="apple"
    ```

  - The meaning of a computed propertie is simple: `[fruit]` means that the propety name should be taken from `fruit` variable. So, if a visitor enters "apple", object will `{ apple: 5 }`.
  - Essentially, that works the same as:

    - ```
        let fruit = prompt("Which fruit to buy?", "apple");
        let bag = {};

        // take property name from the fruit variable
        bag[fruit] = 5;
      ```

  - But with the computed properties look nicer.

## Property value shorthand

- When object properties have the same signature we can write them only one time, like:

  ```
    const name = "Guilherme Gules";

    const user = {
      name,
      age: 21
    }
  ```

## Property existence test, "in" operator

- A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist! Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

  - ```
    let user = {};

    alert( user.noSuchProperty === undefined ); // true means "no such property"
    ```

- There a special operator `in` for that situation
  - The syntax is `"key" in object`

## The "for...in" loop

- let’s output all properties of `user`:

  - ```
      let user = {
      name: "John",
      age: 30,
      isAdmin: true
    };

    for (let key in user) {
      // keys
      alert( key );  // name, age, isAdmin
      // values for the keys
      alert( user[key] ); // John, 30, true
    }
    ```

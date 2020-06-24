// Promises
const doSomethingPromise = () =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("First data");
    }, 1000);
  });

const doOtherThingPromise = () =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("Second data");
    }, 1500);
  });

console.log(doSomethingPromise()); // Promise pending

Promise.all([doSomethingPromise(), doOtherThingPromise()])
  .then((data) => {
    console.log("Using Promise all", data[0].split(""), data[1].split(""));
  })
  .catch((err) => console.log("Ops", err));

doSomethingPromise()
  .then((data) => {
    const invertedData = data.split("").reverse().join("");
    console.log("Normal data:", data);
    console.log("Inverse:", invertedData);
    return doOtherThingPromise();
  })
  .then((data) => {
    const invertedData = data.split("").reverse().join("");
    console.log("Normal data:", data);
    console.log("Inverse:", invertedData);
  })
  .catch((err) => console.log("Ops", err));

Promise.race([doSomethingPromise(), doOtherThingPromise()])
  .then((data) => console.log("Using Promise race", data))
  .catch((err) => console.log("Ops", err));

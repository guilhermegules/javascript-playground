// Fetch
const fetch = require("node-fetch");

const api = () =>
  fetch("https://api.github.com/users/guilhermegules")
    .then((response) =>
      response.status === 200 ? response.json() : new Error("Request Error")
    )
    .catch((err) => console.log("Error: ", err));

// Async / Await
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 123 });
    }, 1000);
  });

const simpleFunc = async () => {
  const data = await Promise.all([asyncTimer(), api()]);
  return data;
};

simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// Event Emitter
const EventEmitter = require("events");

// emitter.on("User logged", (data) => {
//   console.log(data);
// });

// emitter.emit("User logged", { user: "Guilherme Gules" });

class User extends EventEmitter {
  userLogged(data) {
    this.emit("User logged", data);
  }
}
const user = new User();

user.on("User logged", (data) => {
  console.log(data);
});

user.userLogged({ user: "Guilherme Gules" });
user.userLogged({ user: "Serli Moreira" });

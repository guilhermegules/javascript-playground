const user = prompt("Who's there?");

console.log(user);
if (user === null) {
  alert("Canceled");
}

if (user === "Admin") {
  const password = prompt("Password?");

  if (password === null) {
    alert("Canceled");
  } else if (password === "TheMaster") {
    alert("Welcome");
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don't know you");
}

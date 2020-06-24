## Promises e Callbacks

Revisão de Promises e Callbacks 

Promises podem ter três estados:
- Pending; 
- Fulfilled;
- Rejected.

### Exemplo com callback, o código fica extenso e difícil de ler
```
function doSomething(callback) {
  setTimeout(() => {
    callback("First data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(() => {
    callback("Second data");
  }, 1000);
}

function doAll() {
  doSomething((data) => {
    const processedData1 = data.split("");

    doOtherThing((data) => {
      const processedData2 = data.split("");
      setTimeout(() => {
        console.log("Processed Data:", processedData1, processedData2);
      }, 1000);
    });
  });
}

```
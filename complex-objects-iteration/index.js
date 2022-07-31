const data = {
  level1: {
    level2: {
      level3: "some data",
      subLevel: {
        level4: "subLevel",
        list: [1, 2, 3],
        subLevel2: {
          level5: "level5",
        },
      },
    },
  },
};

const dig = (object, key) => {
  if (key in object) return object[key];

  const deepObject = Object.values(object).reduce((acc, value) => {
    if (acc !== undefined) return acc;

    if (typeof value === "object") return dig(value, key);
  }, undefined);

  return deepObject;
};

console.log(dig(data, "level1"));
console.log(dig(data, "level3"));
console.log(dig(data, "level4"));
console.log(dig(data, "list"));
console.log(dig(data, "level5"));
console.log(dig(data, "level6"));

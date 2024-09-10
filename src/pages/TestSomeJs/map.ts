const oldArray = [
  { name: 'a', age: 1, package: { money: 1 } },
  { name: 'b', age: 2, package: { money: 2 } },
  { name: 'c', age: 3, package: { money: 3 } },
];

const errorNewArray = oldArray.map((item) => {
  if (item.name === 'a') {
    item.package.money = item.package.money + 1;

    return item;
  }

  return item;
});

const successNewArray = oldArray.map((item) => {
  if (item.name === 'b') {
    return {
      ...item,
      package: {
        ...item.package,
        money: item.package.money + 1,
      },
    };
  }

  return item;
});

console.log(oldArray);
console.log(errorNewArray);
console.log(successNewArray);

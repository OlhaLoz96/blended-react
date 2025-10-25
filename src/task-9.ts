interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: ["1", "2", "3"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

// addItem, getItem
numberContainer.addItem(4);
console.log("numberContainer", numberContainer);
console.log("numberContainer", numberContainer.getItem(0));

stringContainer.addItem("4");
console.log(stringContainer);

//
function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}

console.log(getLastElement<string>(stringContainer));
console.log(getLastElement<number>(numberContainer));

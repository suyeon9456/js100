const transform = (a, b) => {
  return a.map((item, i) => [item, b[i]]);
};

const result = transform([1, 2, 3, 4], ['a', 'b', 'c', 'd']);
console.log(result);
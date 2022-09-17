const order = (block, rule) => {
  const list = [];
  for(item of block) {
    if (rule.indexOf(item) !== -1) {
      list.push(rule.indexOf(item));
    }
  }
  return list;
}

const blockStack = (blocks, rule) => {
  return blocks.map((block) => {
    let result = true;
    order(block, rule).reduce((prev, curr) => {
      if (prev > curr) {
        result = false;
      }
      return curr;
    }, 0);
    return result;
  });
};


const stackBlocks = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const stackRule = 'ABD';

const result = blockStack(stackBlocks, stackRule);
console.log(result);
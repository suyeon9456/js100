// 1)

const fillInBlank1 = (str) => {
  const blanks = Array.from({ length: 50 }, () => '=');
  const diffLength = blanks.length - str.length;

  blanks.splice(parseInt((diffLength / 2), 10), str.length, str);
  return blanks.join('');
}

const result1 = fillInBlank1('hi');
console.log(result1);

// 2)
const fillInBlank2 = (str) => {
  const diffLength = parseInt(((50 - str.length) / 2), 10);
  const startStr = str.padStart(diffLength + str.length, '=');
  console.log(startStr);
  return startStr.padEnd(50, '=');
}

const result2 = fillInBlank2('hi');
const solution = (str) => {
  const text = str.split('')
  text.forEach((num) => {
    if (parseInt(num) % 3 != 0) {
      throw new Error('3이 아님');
    }
  });
  const d = { 3 : 1, 6 : 2, 9 : 3 };
  let count = 1;
  const result = text.reverse().reduce((a, b) => {
    const res = a + (d[parseInt(b, 10)] * count);
    count *= 3;
    return res;
  }, 0);
  return result;
}

console.log(solution('93'));
function weird369(n) {
  let answer = 0;
  let count = 1;
  const d = {3 : 1, 6 : 2, 9 : 3};
    
    while (n.length !== 0){
      answer += d[parseInt(n.pop(), 10)] * count;
      console.log(answer)
        count *= 3;
    }       
    return answer;
}

console.log(weird369('93'.split('')))

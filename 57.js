const countNumber = ({ number, countTarget }) => { // 매개변수명...
  const numbers = Array.from({ length: number }, (_, i) => i + 1)
    .join('')
    .split('');
  return numbers?.filter((num) => parseInt(num, 10) === countTarget).length;
};

const result = countNumber({ number: 1000, countTarget: 1 });

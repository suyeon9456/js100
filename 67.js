const handshakeCount = (total) => {
  let participant = 0;
  let totalshakes = 0;
  let temp = 0;
  while (true) {
    totalshakes = parseInt((participant * (participant - 1))/ 2, 10);
    if (total < totalshakes) {
      break;
    }
    temp = totalshakes;
    participant += 1;
  }
  return [parseInt(total - temp, 10), participant];
};

console.log(handshakeCount(59))


const solution = (graph, start, end) => {
  const queue = [start];
  const visited = [start];
  let cnt = -1;

  while (queue.length !== 0) {
    cnt += 1;

    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node === end) {
        return cnt;
      }
      const addNodes = graph[node].filter((nextNode) => !visited.includes(nextNode));
      visited.push(...addNodes);
      queue.push(...addNodes);
    }
  }
  return cnt;
}

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

console.log(solution(graph, 'A', 'E'));


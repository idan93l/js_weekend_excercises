const bus = [[10,0],[10,1],[10,1],[10,1]]

const number = busStops => {
  let up = 0;
  let down = 0;
  for (let i = 0; i < busStops.length; i++) {
    up += busStops[i][0];
    down += busStops[i][1];
  }
  return up -down;
}

console.log(number(bus))
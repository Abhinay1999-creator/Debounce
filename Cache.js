function cache(fn) {
  const memo = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (memo[key]) {
      console.log("Returning from cache");
      return memo[key];
    } else {
      console.log("Calculating result");
      const result = fn(...args);
      memo[key] = result;
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

const cachedAdd = cache(add);

console.log(cachedAdd(2, 3)); // Calculating result → 5
console.log(cachedAdd(2, 3)); // Returning from cache → 5
console.log(cachedAdd(4, 5)); // Calculating result → 9

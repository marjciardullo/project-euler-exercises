function fibonacci(num) {
  var sum = 0;
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;
  for (; n1 + n2 < num; ) {
    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
    if (n3 % 2 === 0) {
      sum += n3;
    }
  }
  return sum;
}

console.log(fibonacci(4000000));

function fibs(n) {
  let list = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    list.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return list;
}

function fibsRec(n, a = 0, b = 1, list = []) {
  if (n === 0) {
    return list;
  }
  list.push(a);
  return fibsRec(n - 1, b, a + b, list);
}

console.log(fibs(8));
console.log(fibsRec(8));

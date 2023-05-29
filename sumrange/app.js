function range(start, end) {
  let storeRange = [];
  for (let i = start; i <= end; i++) {
    storeRange.push(i);
  }
  console.log(storeRange);
}

function sum(...nums) {
  let numArray = [...nums];
  console.log(numArray.reduce((a, b) => a + b, 0));
}

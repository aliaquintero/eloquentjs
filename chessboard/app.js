let size = prompt("Enter a number");
let board = "";

// print lines
for (let i = 0; i < size; i++) {
  // print characters
  for (let n = 0; n < size; n++) {
    if ((i + n) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  // line break
  board += "\n";
}
console.log(board);

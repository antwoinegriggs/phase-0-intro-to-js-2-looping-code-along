// Code your solutions in this file
function writeCards(name, event) {
  const newArray = [];
  for (let index = 0; index < name.length; index += 1) {
    const message = `Thank you, ${name[index]}, for the wonderful ${event} gift!`;
    newArray.push(message);
  }
  return newArray;
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n -= 1;
  }
}

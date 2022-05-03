// const marry = Array(15)
//   .fill(null)
//   .map((value, index) => Array(15).fill(index));

let s = new Map();
const initialState = [...Array(15).keys()].reduce((prev, curr) => {
  [...Array(15).keys()].forEach((val) => {
    prev.set(`${curr}X${val}`, null);
  });
  return prev;
}, s);

console.log(s);

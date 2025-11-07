const remainder = "0123456789ABCDEF";
let orders = "";
let q = 0;
let n = 256;
let b = 8;
do {
  q = Math.floor(n / b);
  let r = n % b;
  orders += remainder[r];
  n = q;
} while (q != 0);

console.log(orders.split("").reverse().join(""));

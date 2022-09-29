//задание 1

document.write("1 задание <br />");
for (let i = 1; i <= 50; i++) {
  document.write(i, " ");
}
document.write("<br />");

for (let i = 35; i >= 8; i--) {
  document.write(i, " ");
}
document.write("<br />");
document.write("<br />");

//задание 2
document.write("2 задание <br />");
let r = 89;
while (r >= 11) {
  document.write(r, " ");
  r--;
}
document.write("<br />");
document.write("<br />");

//задание 3
document.write("3 задание <br />");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
document.write(sum);
document.write("<br />");
document.write("<br />");

//задание 4
document.write("4 задание <br />");
let h = 5;
let summ = 0;
for (let q = 1; q <= h; q++) {
  summ = summ + q;

  document.write(" summ " + q + " = " + summ + ";");
}
document.write("<br />");
document.write("<br />");

//задание 5
document.write("5 задание <br />");
let g = 56;
for (let u = 8; u <= g; u++) {
  if (u % 2 === 0) {
    document.write(u + " ");
  }
}
document.write("<br />");
document.write("<br />");

//задание 6
document.write("6 задание <br />");
let result;
for (let i = 2; i <= 9; i++) {
  for (let mn = 1; mn <= 10; mn++) {
    result = i * mn;
    document.write(i, " *", mn, " =", result, "<br />");
  }
  document.write("<br />");
}

//задание 7
document.write("7 задание <br />");
let n = 1000;
let num = 0;
while (n / 2 >= 50) {
  n = n / 2;
  num++;
}
document.write("число ", n, " кол-во итераций ", num);
document.write("<br />");
document.write("<br />");

//задание 8
document.write("8 задание <br />");

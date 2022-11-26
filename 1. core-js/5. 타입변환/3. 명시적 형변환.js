
//명시적 문자열 변환
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = '' + a + b;

console.log(result);

//명시적 숫자 변환
console.log('=====================');

var m = '10', n = '20';
// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseInt(n);
var result2 = +m + +n;

console.log(result2);

//명시적 논리변환
console.log('=========================');

var ex1 = Boolean(null);
console.log(ex1);

var ex2 = !!'메롱';
console.log(ex2);


// 문제 1

/*
var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

if (a === b && b === c) {
    alert('3개 값이 모두 같습니다.');
} else if (a === b || b === c || c === a) {
    alert('2개 값이 같습니다.');
} else {
    alert('모두 다른 값입니다.');
}
*/

//문제 2
/*
var a = +prompt('정수 A');
var b = +prompt('정수 B');
//차이를 저장
var diff = (a > b) ? a - b : b - a; 

alert(`두 값의 차이는 ${diff}입니다.`);
*/

var diff;
if (a > b) {
    diff = a - b;
} else {
    diff = b - a;
}

//문제 3

var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

var min = a; 
if (b < min) min = b;
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`);



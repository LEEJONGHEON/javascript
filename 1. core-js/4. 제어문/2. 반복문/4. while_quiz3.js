
/*
var num = +prompt('양의 정수를 입력해주세요.');

var i = 1;
var result = '';
while (i <= num) {
    result += (i % 10);
    i++;
}
alert(result);

*/

/*
var n = +prompt('n의 값: ');

var i = 1;
var result = '';
while (i <= n) {
    result += `${i}의 제곱은 ${i ** 2}입니다.\n`;
    i++;
}
alert(result);
*/

/*
var n = +prompt('몇 개의 *를 출력할까요?');

var i = 1;
var result = '';
while (i <= n) {
    result += '*';
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
alert(result);
*/

var n = +prompt('정사각형을 그립니다.\n높이는 얼마입니까?');

var i = 1;
var result = '';
while (i <= n) {
    var j = 1;
    while (j <= n) {
        result += '*  ';
        j++;
    }
    result += '\n';
    i++;
}
alert(result);

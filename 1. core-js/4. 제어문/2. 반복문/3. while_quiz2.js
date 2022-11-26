
var count = +prompt('양의 정수를 입력!');

var n = 1;
var mark = '';
while (n <= count) {
    if (n % 2 === 1) {
        mark += '+';
    } else {
        mark += '-';
    }
    n++;
}
alert(mark);
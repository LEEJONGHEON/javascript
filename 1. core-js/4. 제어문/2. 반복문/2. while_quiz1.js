

var begin = +prompt('첫번째 숫자를 입력!');
var end = +prompt('두번째 숫자를 입력!');

var total = 0;
var num = begin;

while (num <= end) {
    total += num;
    num++;
}
alert(`${begin} ~ ${end}까지의 누적합: ${total}`);
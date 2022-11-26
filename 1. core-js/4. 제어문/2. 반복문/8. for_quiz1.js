

// var num = +prompt('정수값: ');

var result = '';
var count = 0;
for (var x = 1; x <= num; x++) {
    if (num % x === 0) {
        result += `${x}\n`;
        count++;
    }
}
alert(result + `약수는 ${count}개입니다.`);


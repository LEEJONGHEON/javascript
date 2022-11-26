

var n = +prompt('양의 정수를 입력하세요.');

var result = '';

for (var i = 2; i <= n; i *= 2) {
    result += (i + ' ');
}
alert(result);
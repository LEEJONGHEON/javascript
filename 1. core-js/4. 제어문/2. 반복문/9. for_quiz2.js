

//가로길이
var width = +prompt('한 변(1): ');
//세로길이
var height = +prompt('한 변(2): ');

//가로 세로 보정
if (width < height) {
    var t = width;
    width = height;
    height = t;
}

var result = '';

for (var y = 1; y <= height; y++) {
    for (var x = 1; x <= width; x++) {
        result += `* `;
    }
    result += '\n';
}
alert(result);


// 원의 넓이를 구해야 함:  pi * r ** 2

//반지름
var pi = 3.14159265;

//반지름 5인 원의 넓이
var circle1 = pi * 5 ** 2;
// console.log(circle1);

//반지름 17인 원의 넓이
var circle2 = pi * 17 ** 2;

//원의넓이를 구해주는 함수 정의
function calcAreaCircle(r) {
    console.log("야!");
    var area = pi * r ** 2;
    return area;
}

function sayHi() {
    console.log('안녕!!!~~~~~~');
}

function makeLine() {
    console.log('========================================');
}



// 함수의 호출
var c1 = calcAreaCircle(20);
console.log(c1);


var c2 = calcAreaCircle(100);
console.log(c2);

for (var i = 0; i < 3; i++) {
    sayHi();
}


makeLine();

console.log('dfjlsdjfldsjflsf');

makeLine();

makeLine();
makeLine();
makeLine();
makeLine();
makeLine();
makeLine();
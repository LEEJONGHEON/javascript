
// 1. 변수의 중복선언 허용
var x = 10;
var x = 100;
console.log(x);

// 2. 블록레벨 스코프 지원 X
var i = '안녕'; //전역 스코프

for (var i = 1; i <= 3; i++) {
    console.log(i);
}

console.log(`i : ${i}`);

// 3. 변수 호이스팅
z = 100;
console.log(z);


var z;
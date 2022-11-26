

// 1. 중복 선언을 허용하지 않음
let x = 3;
// let x = 30;
x = 30;
console.log(x);

// 2. 블록레벨 스코프 지원
let y = '메롱'; //전역 스코프
if (true) {
    let y = 20;
    console.log(`if-y : ${y}`);
}
console.log(`global-y : ${y}`);

// 3. 변수 호이스팅을 일으키지 않음
z = 100;
console.log(z);

let z;
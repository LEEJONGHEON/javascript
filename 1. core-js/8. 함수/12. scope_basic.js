
var x = 10;

function foo() {
    var y = 3;    
}

console.log(x);

console.log('======================');

//함수 바깥쪽에서 선언된 변수는 전역 변수
//전역변수는 프로그램 전체에서 사용할 수 있음
var z = 'global z';

function bar() {
    //함수 내부에서 선언된 변수는 지역 변수
    //지역변수는 함수 안에서만 사용가능하며, 함수 호출이 끝나면 메모리에서 자동 삭제됨
    var z = 'local z';

    //지역변수와 동일한 이름의 전역변수가 존재할 시
    // 전역변수보다 지역변수를 우선 참조함.
    console.log(`함수 내부 z : ${z}`);

    return z;
}

var zz = bar();
console.log(`함수 외부 z: ${z}`);
console.log(zz);
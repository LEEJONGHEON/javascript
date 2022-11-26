//============== 함수 정의 영역 =============== //

//함수 정의 기본
function add(n1, n2) {
    return n1 + n2;
}

//함수 정의 기본2 (함수 리터럴)
var add = function (n1, n2) {
    return n1 + n2;
};

function multi(n1, n2) {
    return n1 * n2;
}

//재귀 함수
function countdown(n) {
    // if (n < 0) {
    //     return;
    // }
    // console.log(n);
    // countdown(n-1);

    for (var i = n; i >= 0; i--) {
        console.log(i);
    }

}

function compute(num) {
    if (num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}

// 중첩 함수
function outer() {
    console.log('outer call!');

    //inner함수는 outer의 전용함수입니다.
    //따라서 outer 바깥쪽에서 inner를 호출할 수 없습니다.
    function inner() {
        console.log('inner call!');
    }
    inner();
    inner();
}

//화살표 함수 (ES6+)
function sub(n1, n2) {
    return n1 - n2;
}
var sub = function(n1, n2) {
    return n1 - n2;
};
// 화살표 함수의 내용이 단 한문장이면 중괄호와 return 생략가능
var sub = (n1, n2) => n1 - n2;

function sayHello() {
    console.log('안녕하세요~~');
}

var sayHello = () => console.log('안녕하세요~~');

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 sqrt 작성해보세요.
var doubleMulti = n => n ** 2;


sub(10, 5);

//================= 실행 영역 ================//

const result = (n1,n2) => {return n1/n2;}


// 즉시 실행 함수
(function () {
    add(10, 20);
    console.log(typeof add);

    multi(10, 3);

    console.log('==========================');
    
    //재귀 함수 호출
    countdown(3);
    console.log('==========================');
    
    var r1 = compute(4);
    console.log(r1);
    
    console.log('==========================');
    
    outer();
    
    console.log('==========================');

    var r2 = doubleMulti(4);
    console.log(`r2: ${r2}`);

})();



//어떤 숫자 n을 전달하면 1부터 n까지의 짝수들을 모두 출력하는 함수
function showEvenNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function showOddNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

function showFifthNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

function showEighthNumber(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 8 === 0) {
            console.log(i);
        }
    }
}



function showNumber(n, x) {
    for (var i = 1; i <= n; i++) {
        if (x(i)) {
            console.log(i);
        }
    }
}


function foo(cb1, cb2) {
    var n = 1;
    while (true) {
        //실행코드
        cb2(n);
        //탈출조건
        if (cb1(n)) {
            break;
        }
        n++;
    }
}


//5의배수들만 출력
showNumber(20, i => i % 5 === 0);

showNumber(30, i => i % 8 === 0);

console.log('=======================');
showNumber(10, i => i % 2 === 1);
console.log('=======================');
showNumber(100, i => i % 15 === 0);


console.log('=======================');

foo(n => n === 10, n => console.log("쿨쿨쿨하하하" + n ** 3));


console.log('=============================');

/*
    - 콜백함수는 함수 호출자가 기본 공통기능은 신경쓰지 않고
      변경되는 기능만 스스로 만들어서 함수에게 전달하는 기법.
*/
function sayHello(cb) {
    console.log('=====================');
    cb('안녕안녕~~');
    console.log('=====================');
}


sayHello(message => console.log(`콜백이 할말이 있단다 : ${message}`));

sayHello(message => {
    console.log(`${message} ${message} ${message}`);
    console.log('방가방가 잘가잘가');
    var a = 10, b = 20;
    console.log(a + b);
});
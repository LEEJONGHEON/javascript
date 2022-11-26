
// return 키워드는 함수의 탈출문!!
// 따라서 return 이하에 코드를 쓸 수 없음
function add(n1, n2) {
    return n1 + n2;
    console.log('안녕!');
}

function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);    
}

function callName(nickName) {
    var prohibits = ['바보', '멍청이', '홍길동'];
    if (prohibits.includes(nickName)) {
        console.log('잘못된 닉네임은 인사를 못해준다 욘석아!');
        return;
    }
    console.log(`${nickName}님 안녕하세요~~`);
}


//반환값(return) : 함수호출부로 함수의 결과값을 가져다주는 것
var r1 = add(5, 7);
console.log(r1);

var r2 = add(add(1,2), add(3, add(3,1)));
//var r2 = add(add(1,2), add(3, 4));
//var r2 = add(3, 7);
//var r2 = 10;
console.log(r2);

console.log('=============================');

// return값이 없는 함수는 아무것도 가져오지 않기 때문에
// 변수에 저장할 수 없고, 다른 함수의 인수로도 사용불가능
var r3 = multi(3, 5);
console.log(`r3: ${r3}`);

//multi(4, 8);
multi(add(2,2), add(4,4));

//add(undefined, undefined);
add(multi(2,3), multi(4,1));

console.log('===========================');

callName('뚝뚝이');
callName('빡빡이');
callName('멍청이');


console.log('===================================');

// 함수의 리턴값은 언제나 하나!
// 그런데 2개의 정수를 전달받아서, +-*/의 4가지결과를 리턴받고 싶다?

function operateAll(n1, n2) {
    //return [n1+n2, n1-n2, n1*n2, n1/n2];
    return {
        plus: add(n1, n2),
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };
}

var r4 = operateAll(10, 5);
console.log(`덧셈: ${r4.plus}`);
console.log(`곱셈: ${r4.multi}`);
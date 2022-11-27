/*
num이 global 변수라
increase 함수 이외에도
num의 상태값을 변경시킬 가능성이 존재함

*/

// 카운팅
let num = 0; // 카운트 상태 변수

// 카운트 상태 변경함수
const increase = () => {
    return num++;
};

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(num);


/*
num이 global 변수라서
함수 호출시 초기화되서
num값 변경 불가능
*/
const increase2 = () => {
    let num=0;
    return num++;
}

console.log(increase2());
console.log(increase2());
console.log(increase2());


// ============

// const increaseClosure = function() {

//     let num = 0; // 상태 변수

//     return function() {
//         return ++num;
//     };
// };

const increase3 = (function() {

    let num = 0; // 상태 변수

    return function() {
        return ++num;
    };
})();

console.log(increase3());
console.log(increase3());
console.log(increase3());
console.log(increase3());
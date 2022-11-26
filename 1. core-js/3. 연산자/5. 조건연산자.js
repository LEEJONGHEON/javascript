
//시험 점수
var score = 25;

var result = score >= 60 ? '합격' : '불합격';
console.log(`시험결과: ${result}`);

console.log('=========================');

var money = +prompt('돈 얼마 있어요??');
var food = money >= 6000 ? '돈까스' : money >= 3000 ? '라면' : '굶어';
alert(`선택된 음식: ${food}`);
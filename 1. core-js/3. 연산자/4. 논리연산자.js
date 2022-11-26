
// && : AND연산
var t = true, f = false;

console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

// || :  OR 연산
console.log('=====================');

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산 (!) : 논리 반전
console.log('==========================');

console.log(!t);
console.log(!f);

var money = 10;
if (!money) {
    console.log('나는 그지에요~');
} 
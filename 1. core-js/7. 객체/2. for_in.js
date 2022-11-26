
var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S21',
    price: 1200000
};

for (var data in phone) {
    // console.log(data);
    console.log(phone[data]);
}


// 새로운 프로퍼티를 추가하고 싶다!
// 객체 프로퍼티 key 존재 유무 확인

var newKey = 'memory';

if (!(newKey in phone)) {
    phone[newKey] = '16GB';
}

console.log(phone);
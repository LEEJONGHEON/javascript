const counting = (() => {
    let num = 0;

    return {
        increase: () => ++num,
        decrease: () => --num
    };
})(); // ()로 가두고 바로 ()실행시키면 바로 선언
// 함수 부를떄까지 return 값 반환하지않음

console.log(counting.increase());
console.log(counting.increase());
console.log(counting.increase());
console.log(counting.decrease());
console.log(counting.decrease());
console.log(counting.increase()); // 2



// ================

const count = () => {
    let num = 0;
    return func(num);
};

const decrease = (num) => {
    return num--;
}
const increase = (num) => {
    return num++;
}

console.log(count(increase(num)));
console.log(count(increase(num)));
console.log(count(decrease(num)));


// 콜백을 이용한 클로저
const counter = (() => {
    let num = 0;

    return (callback) => {
        return num = callback(num);
    };
})();

console.log(counter(n => n +=2));
console.log(counter(n => n **2));


// 콜백을 이용한 클로저

function abc() {
    let num = 0;

    function def(callback) {
        num = callback(num)
        return num;
    }
    return def;
};

const counter2 = abc; // counter2에 abc 함수 정보 할당
const c = counter2(); // c 에 abc 함수 return 값 저장 = def 
c(n => n +=2); // def에 callback 값전달 return 값 num 리턴받음
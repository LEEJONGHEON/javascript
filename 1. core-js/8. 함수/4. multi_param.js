
// 2개의 정수를 전달하면 그 합을 구해주는 함수 정의
function add2(n1, n2) {
    return n1 + n2;
}
function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// n개의 정수를 전달하고 싶으면?? 배열 1개에 담아서 전달해라~
function addAll(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

// ES6+ 문법
function addAll2(...numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

var result1 = add2(10, 20);
var result2 = add3(10, 20, 30);
console.log(`result2: ${result2}`);

var result3 = addAll([10, 20, 30, 40, 100, 200]);
console.log(`result3: ${result3}`);

var result4 = addAll2(10, 20, 30, 40, 100, 200);
console.log(`result4: ${result4}`);

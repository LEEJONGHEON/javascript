

function calcNumbersTotalAndAverage(...numbers) {
    var total = 0; //총합
    for (var num of numbers) {
        total += num;
    }
    var avg = total / numbers.length; //평균
    var obj = {
        total: total,
        avg: avg
    };
    return obj;
}

/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);
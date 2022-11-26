

// 매개변수 x : 지역 스코프
function outer(x) {
    var y = 'outer local y';
    var z = 'outer local z';
    console.log(x);
    console.log(y);

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
}

var x = 'global x';

outer('outer param x');





function discount(price) {
    var sale_rate = 0.2;
    //20퍼 할인된 가격을 반환
    return price - price * sale_rate;
}
function showSaleRate() {
    var sale_rate = 0.3;
    console.log(`오늘의 할인율은 ${sale_rate * 100}%입니다.`);
}

(function() {
    
    var x = 10;

    showSaleRate();
    console.log(`할인액: ${discount(1000)}원`);

})();


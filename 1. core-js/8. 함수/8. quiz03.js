
function calcBMI(height, weight) {

   var kg = weight;
   var m = height / 100;
   var bmi = kg / (m * m);

   if (bmi >= 25.0) {
      console.log('당신은 과체중입니다.');
   } else if (bmi <= 18.5) {
      console.log('당신은 저체중입니다.');
   } else {
      console.log('당신은 정상체중입니다.');
   }

   return bmi;
}


//원하는 자리수만큼 반올림해주는 함수
function round(number, pos) {
   return Math.round(number * 10 ** pos) / 10 ** pos;
}


/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
   18.5이하면 "당신은 저체중입니다." 
   나머지는 "당신은 정상체중입니다."를 출력하는 
   CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
*/

var h = 178.4, w = 78.2;
var myBmi = calcBMI(h, w);

console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);
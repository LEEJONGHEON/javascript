
// 식별자: 데이터를 구분하기 위한 고유 이름(변수, 함수..)
// 1. 대소문자를 구분할 것!
var banana = '바나나';
var Banana = '뻐네너';
var BaNaNa = '버네이너으';

console.log(banana);
console.log(Banana);

//2. 숫자로 시작하거나 숫자만으로 만들면 안됨!
// var 800 = '메롱';
// var 70apple = '사과';
var number7 = 7;
var app99le = 99;

//3. 특수문자는 $, _ 외 사용불가
// var hi! = '안녕';
var $bye = '잘가';
var my_friend = '둘리';

//4. 띄어쓰기 불가능
// var user phone number = '01012344321';
var userphonenumber = '01099993333';

// naming convention : 이름 규칙
var user_phone_number = 1; // snake case (파이썬, SQL 선호)
var userPhoneNumber = 1;   // camel case (자바, 자바스크립트 선호)
var UserPhoneNumber = 1;   // pascal case (C계열)

//5. 키워드(예약어)는 이름으로 쓰지 말것!
// var var = 1;
// var if = 1;
// var break = 1;

// 식별자 이름은 구체적이고 명확하고 일관성있게 지을 것!
var a = '홍길동';   //  userName
var zzzz = 'abc1234@gmail.com';  // userEmail
var fzd = '남자'  // userGender

var money = 50000;
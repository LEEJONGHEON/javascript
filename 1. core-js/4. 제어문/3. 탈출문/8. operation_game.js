

/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/


alert('~~~~~~~~~  재미있는 사칙연산 게임 ~~~~~~~~~~\n[즐겁게 문제를 풀다가 지겨우면 0을 누르세요~]');

var qNum = 1; //문제 번호
var okCount = 0, wrongCount = 0; //정오답횟수를 저장할 변수

var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
var level = +prompt(message);

var max; //문제난이도 최대값
if (level === 1) {
    max = 100;
} else if (level === 2) {
    max = 50;
} else if (level === 3) {
    max = 20;
} else {
    max = 999;
}

while (true) {

    var first = Math.floor(Math.random() * max) + 1;
    var second = Math.floor(Math.random() * max) + 1;

    //랜덤으로 3개의 숫자를 나오도록 변수 선언
    var markNum = Math.floor(Math.random() * 3);

    //실제 정답
    var realAnswer;
    var mark;
    if (markNum === 0) {
        mark = '+';
        realAnswer = first + second;
    } else if (markNum === 1) {
        mark = '-';
        if (first === second) {
            continue;
        } else if (first < second) {
            var t = first;
            first = second;
            second = t;
        }
        realAnswer = first - second;
    } else {
        mark = 'x';
        realAnswer = first * second;
    }
    
    //사용자의 입력값
    var userAnswer = +prompt(`Q${qNum++}. ${first} ${mark} ${second} = ??`);
    

    //종료 조건
    if (userAnswer === 0) {
        alert(`게임을 종료합니다!\n---------------------------\n정답횟수: ${okCount}회, 틀린횟수: ${wrongCount}회`);
        break;
    }

    //정답 검증
    if (realAnswer === userAnswer) {
        alert('정답입니다!');
        okCount++;
    } else {
        alert('틀렸습니다!');
        wrongCount++;
    }
}
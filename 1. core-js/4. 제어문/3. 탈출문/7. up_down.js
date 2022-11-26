

// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.

//실제 정답 
var secret = Math.floor(Math.random() * 100) + 1;

//게임 데이터
var min = 1, max = 100;

alert('[UP & DOWN 게임 1 ~ 100사이의 숫자를 맞춰보세요]');
var level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

var INIT_COUNT;

if (level === 1) {
    alert('난이도 상을 선택했습니다. 3번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 3;
} else if (level === 2) {
    alert('난이도 중을 선택했습니다. 6번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 6;
} else if (level === 3) {
    alert('난이도 하를 선택했습니다. 10번만에 맞추시면 됩니다! 파이팅!!');
    INIT_COUNT = 10;
} else {
    alert('난이도를 잘못 선택했습니다. 난이도 상으로 자동시작합니다.');
    INIT_COUNT = 3;
}

var countDown = INIT_COUNT; 

while (true) {
    //사용자가 입력한 숫자
    var userAnswer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);

    
    //사용자의 입력이 입력범위 안의 값인가?
    if (userAnswer <= min || userAnswer >= max) {
        continue;
    }
    
    countDown--;    

    //입력값 검증
    if (secret === userAnswer) {
        alert(`정답입니다! ${INIT_COUNT - countDown}번만에 맞추셨습니다.`);
        break;
    } else if (secret > userAnswer) {
        alert('UP!!');
        min = userAnswer;
    } else {
        alert('DOWN!!');
        max = userAnswer;
    }

    //게임 종료조건
    if (countDown <= 0) {
        alert(`응 너 졌어요~~~ 정답은 ${secret}이었습니다~~`);
        break;
    } else {
        alert(`${countDown}번의 기회가 남았습니다.`);
    }

}
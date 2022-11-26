
//============== 함수, 전역변수 정의부 ===================//

//게임 데이터 변수 (정답, 선택한숫자, 최소값, 최대값)
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1, //실제 정답
    min: 1,
    max: 100,
    answer: null //사용자가 클릭한 아이콘 숫자
};


//숫자 아이콘 생성 함수
function makeIcons() {

    const $numbers = document.getElementById('numbers');

    for (let n = 1; n <= 100; n++) {
        const $div = document.createElement('div');
        $div.classList.add('icon');
        $div.textContent = n;
        $numbers.appendChild($div);
    }

}

//범위 밖의 아이콘 삭제 처리
function clearIcons(target, isUp) {
    const $numbers = document.getElementById('numbers');

    let $delTarget = target;

    while ($delTarget) {
        let $nextTarget = 
            isUp ? 
                $delTarget.previousElementSibling
                : $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }

}


//UP, DOWN인 경우의 처리
function processUpDownCase(isUp, target) {
    
    const $up = document.getElementById('up');
    const $down = document.getElementById('down');

    if (isUp) { //UP이면?
        $up.classList.add('selected');
        $down.classList.remove('selected');
        gameDatas.min = gameDatas.answer + 1;
        document.getElementById('begin').textContent = gameDatas.min;        
    } else { //DOWN이면?
        $down.classList.add('selected');
        $up.classList.remove('selected');
        gameDatas.max = gameDatas.answer - 1;
        document.getElementById('end').textContent = gameDatas.max;       
    }

    clearIcons(target, isUp);
    
}

//정답인 경우 처리할 일
function processCorrect(target) {
    //1. 축하박스 등장 처리
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');

    //2. target에 id = "move" 부여
    target.setAttribute('id', 'move');
}

//정답을 검증하는 함수
function checkAnswer(target) {
    
    //객체 디스트럭쳐링
    const {secret, answer} = gameDatas;

    if (secret === answer) { //정답인 경우
        processCorrect(target);
    } else if (secret > answer) { //UP인 경우
        processUpDownCase(true, target);
    } else { //DOWN인 경우
        processUpDownCase(false, target);
    }
}

//============== 메인 실행부 ===========================//
(function() {

    makeIcons();

    //아이콘 클릭 이벤트 부여
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        if (!e.target.matches('#numbers .icon')) return;

        //사용자가 선택한 숫자를 객체에 저장
        gameDatas.answer = +e.target.textContent;
        
        //정답 검증
        checkAnswer(e.target);
    });
})();
window.addEventListener('load', function () {
    let playHand;
    let result = document.getElementById('result');
    let rock = document.getElementById('rock');
    let scissors = document.getElementById('scissor');
    let paper = document.getElementById('paper');
    let robotHandField = document.getElementById('robot_hand');
    function janken(hand) {
        let hands = ['rock', 'scissor', 'paper'];
        robothand = hand[Math.floor(Math.random() * hands.length)];
        robotHandField.innerHTML = '相手の手は' + robotHand + 'です'
        result.innerHTML = judge(hand, robotHand) + 'です'
    }
    function judge(myHand, robothand) {
        if (myHand === robothand) {
            return 'あいこ';
        } else if (
            (myHand === 'rock' && robothand === 'scissor') ||
            (myHand === 'scissor' && robothand === 'paper') ||
            (myHand === 'paper' && robothand === 'rock') ) {
                return 'あなたの勝ち' }
        else{
            return 'あなたの負け'
        }
    }
       rock.addEventListener('click', function(){
        janken('rock');
    });

   scissors.addEventListener('click', function(){
        janken('scissors');
    });

   paper.addEventListener('click', function(){
        janken('paper');
    });
});
});
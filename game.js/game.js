//가위, 바위, 보 배열 필요
//유저의 정보가 담긴 배열
//현재 진행중인 게임의 정보가담긴 배열

//class를 사용해서 구조체를 만드는데
//1.plyer
//2.Game


//idnexing을 이용해서 방의 주소갓들을 게임으로불러온다.
//방 숫자 전체길이의 값을 =0으로 지정



let PlayerStatus ={
    WIN: false,
    LOSE: false,
    TIE:false
}

let gameStatus ={
    start: false,
    complete: false,
}
class Hand{//가위 바위 보가 들어가는곳
    constructor(hand){
        this.hand = hand
    }
}
class plyer {//플레이어가 뭘하는지
    constructor(){
        this.Hand=Hand
        
    }
    get 대결(){
        if(player1.hand=가위 && player2.hand=보||
            player1.hand=바위 && player2.hand=가위||
            player1.hand=보 && player2.hand=바위){
            PlayerStatus.WIN=true
            }
            if(plyer1.hand=player2.hand){
                PlayerStatus.TIE=true
            
            }
            else{
                PlayerStatus.LOSE=true
            }
    }
    set Hand(hand){
        this.Hand=hand
    }
}

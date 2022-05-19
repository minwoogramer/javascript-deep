
//class를 사용해서 구조체를 만드는데
//1.plyer
//2.Game


//idnexing을 이용해서 방의 주소갓들을 게임으로불러온다.
//방 숫자 전체길이의 값을 =0으로 지정
const son = ["가위", "바위", "보"]

//이벤트리스너로 위 배열 불러오는방법


class Player{//가위 바위 보가 들어가는곳
    constructor(hand){
        this.hand = hand
    }
}
class Game  {//플레이어가 뭘하는지
    contructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.playerStatus ={
            WIN: false,
            LOSE: false,
            TIE:false
        }
        this.gameStatus ={
            start: false,
            complete: false,
        }
      }

    대결(){
        if(this.player1.Hand=="가위" && this.player2.Hand=="보"||
            this.player1.Hand=="바위" && this.player2.Hand=="가위"||
            this.player1.Hand=="보" && this.player2.Hand=="바위"){
           this.playerStatus.WIN=true
            }
            if(this.player1.hand=this.player2.hand){
            this.playerStatus.TIE=true
            }
            else{
              this.playerStatus.LOSE=true
            }
    }
    
}
let player1 =new Player(손)
let player2 =new Player(손)
let Game = new Game(player1,player2)



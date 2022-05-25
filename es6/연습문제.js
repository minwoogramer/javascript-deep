//1. 직접 class 구조 만들어보기
class 강아지{
    constructor(type, color){
        this.type=type;
        this.color=color;
    }
}
//2. 이번엔 고양이관련 object들을 만들고 싶습니다. 
//3.고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다.
class 고양이 extends 강아지{
    constructor(type, color, age){
        super(type, color);
        this.age=age
    }
    한살먹기(e){
        if(e=강아지){
            console.log(err)
        }
        else{
            this.age=age +1;
        }
    }
}
//4. get/set을 이용해봅시다

// 자바스크립트로 간단한 게임 기능을 가진 오브젝트를 뽑는 class를 만들고 싶습니다. 

// 다음 조건에 따라 class를 만들어보세요. class 이름은 Unit이라고 합시다.

// (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.

// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.

// console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.

// (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.

// 인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다. 
class Unit{
    constructor(){
        this.공격력=5;
        this.체력=100;
    }
    get battlePoint(){
        return this.공격력 +this.체력
    }
    set heal(heal){
        this.체력=this. 체력 + heal;
    }
};

let 쎈애 = new Unit();

console.log(쎈애.battlePoint)
쎈애.heal= 50;

//

var data = {
    odd : [],
    even : []
  }
//(1) data 오브젝트에는 setter 역할 함수가 하나 필요합니다.

// setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다. 
var data = {
    odd : [],
    even: [],
   setter : function(...number){
       number.forEach((a)=>{
           if(a %2 ==1){
               this.odd.push(a);//홀수일때
           }else{
               this.even.push(a);//짝수일때
           }
       })
   }
};
data.setter(1,2,3)
//(2) data 오브젝트에는 getter 역할 함수가 하나 필요합니다.

//getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다. 
var data = {
    odd : [],
    even : [],
    get getter(){
        return [...this.odd, ...this.even].sort((a,b)=> b -a);
    }
  }
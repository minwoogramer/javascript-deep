1.constructor란?
//학생 출석부를 만들어보자

var 학생1 = { name : 'Kim', age : 15 };
var 학생2 = { name : 'Park', age : 15 };
...
//이렇게 만들자니 너무 오래걸릴것같습니다.
//이럴때 쓰는게 constuctor라는걸 사용합니다.

let 학생1 = {name :'kim', age: 15 }   

function 기계(){
    this.name='Kim',
    this.age=15,
    sayHi :function(){
        console.log('안녕하세요' + this.name + '입니다')
    }
}
//this는 새로 생성되는 object를 뜻함
//this.age=15;
//새로 생성되는 oject 에 값 부여가능
function 기계(이름,나이){
    this.name=이름,
    this.age=나이,
    this.sayHi =function(){
        console.log('안녕하세요' + this.name + '입니다')
    }
}

//기계로 생성되는 모든학생에 object에 sayHi()함수에추가하고싶어요



var 학생1 = new 기계('park',15);
var 학생2 = new 기계('kim',27);

this:기계에서 새로 생성되는 object (instance)

//간단 연습문제 : 쇼핑몰에 쓸 상품데이터를 오브젝트로 여러개 만들고 싶습니다. 

var product1 = { name : 'shirts', price : 50000 };
var product2 = { name : 'pants', price : 60000 };

function constuctor(name,price){
    this.name=name,
    this.price=price
}

let 상품1 = new constuctor('shirts', 50000);
let 상품1 = new constuctor('pants', 60000);

//prototype은 유전자 기계를 만들면 prototype이라는공간이 자동으로생깁니다
function 기계(){
    this.name = 'Kim';
    this.age = 15;
  }
  기계.prototype.gender = '남';
  var 학생1 = new 기계();
  
  console.log(학생1.gender)
//   자바스크립트는 오브젝트에서 값을 출력할 때 이런 순서로 물어봅니다.

// (1) 학생1에 직접 gender라는 값이 있는가?

// (2) 그럼 부모 유전자에 gender라는 값이 있는가?

// (3) 그럼 부모의 부모 유전자에 gender라는 값이 있는가?

// (4) 그럼 부모의 부모의 부모의 유전자에 .. 그게 있는가?
// 그래서 학생1이라는 오브젝트가 gender라는 값을 가지고 있지 않지만

// 부모의 유전자(기계.prototype) 에 있는 gender라는 걸 출력할 수 있는 이유!

//작동원리2 : 자바스크립트 내장함수 toString() 을 쓸 수 있는 이유 
var arr = [1,2,3];
console.log( arr.toString() ); //가능
//내가 만든 array에 arr.toString() 이렇게 붙일 수 있는 이유는 

// 내가 만든 array의 부모 유전자가 toString()을 가지고 있기 때문입니다.


class 할아버지{
  constuctor(name, name2){
      this.성= 'kim'
      this.이름= name;
      this.이름2=name2;
  }
  sayHi(){
      console.log('안녕')
      //할아버지 prototype에 생성됌
  }
}
// let 할아버지1 = new 할아버지('만덕')

class 아버지 extends 할아버지{
    //extends한 친구는 super()라는애를 써야함
    //super()=>물려받는 class의 construtor라는 뜻
constuctor(name,name2){
    super(name, name2)
    this.나이=50;
}
 sayHi(){
     console.log('안녕 저는 아버지에요');
     super.sayHi();///부모 class의 ptototype을 의미
 }
}
let 아버지1= new 아버지('만수');

 
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
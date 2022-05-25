//symbol의 용도 : Object 자료형의 비밀스런 key값
let 심볼 = Symbol('설명');

let person = {name : '남민우'};

person.weight =100;
//비밀스런 데이터를 저장하고싶으면?
let weight = Symbol('내 시크릿 몸무게임');
let height = Symbol('내 시크릿 키임')
person[weight] = 77;//심볼로 자료 저장하는방법 이거는 반복문에서 출력안됌 이거는 enumerable하지않음
person[height] = 181;
let person = {name : '남민우', [height]: 77};//이렇게도 심볼넣을수있음

for (let key in person) {
    console.log(person[key]);
}
//Symbol 특징1
//설명이 같다고 같은 Symbol이 아님

let a = Symbol('설명1');
let b = Symbol('설명1');

// a == b는 값지만 출력해보면 같지 않다고 나옴
//Symbole 만들때 마다 유니크한 Symbol 나옴

//Symbol 특징2
//전역변수 같은 전역 Symbol

let c = Symbol.for('설명1')//같은 설명을 가지고있는심볼이 위에이미있으면 기존심볼을 복붙해줌
let d = Symbol.for('설명1')//== let b = a;랑똑같다는겁니다

//a == b 출력해보면 같다고나옴


//Symbol 특징3
//기존내장 Symbol들

let arr = [2,3,4];
arr[Symbol.iterator]
//Symbol.iterator라는 심볼은 for of를 쓸 수 있게 도와주는 Symbol입니다.
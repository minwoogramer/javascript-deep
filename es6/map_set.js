//key, value를 저장하는 Map 자료형

let person = new Map();
//Map 자료형 만드는 법
person.set('name', 'Kim');
person.set('age', 20);
//map(2){"name" =>"kim", "age" =>"20"}
//Map 자료형은 자료간의 연관성을 표현하기 위해 씁니다.

//전통적인 Object 자료형을 자료이름을 글자만가능했지만
//Map 자료형은 다가능
person.set('name', 'Kim',100, 'Kim',[1,2,3], 'Kim');
person.set('age', 20);
//Map에서자료 꺼내는법

person.get('age')
//삭제하는법
person.delete('age')
//자료갯수 세는법
person.size;
//수학의연관성같은거 표현하려고 가끔쓰는겁니다
//반복문으로 Map에서 자료 꺼내는 법
for(let key of person.keys()) {
   console.log(key)
}
//Map 자료형에 직접 자료 집어넣을땐

let person2 = new Map([
    ['name', 'kim'],
    ['age', 20]
])

//Set 자료형
//중복자료를 허용하지않는 Array비슷한거를 만들고 싶을때 씁니다.
var 출석부 =[ 'john' , 'tom', 'andy', 'tom' ];
var 출석부2 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);
//출석부 2출력하면 {'john' , 'tom', 'andy'} 이렇게나옵니다.
//되게유용함

//Set 자료형에 자료추가하기
출석부2.add('sally');
//Set 자료형에 제거하기
출석부2.delete
//확인하기
출석부2.has
//몇개있는지 확인
출석부2.size
//Set 자료형 <=> Array 자료형
//Array의 중복자료를 제거하고 싶으면?
//array를 set으로 변환하고싶을때 쓰면 됍니다.
var 출석부 =[ 'john' , 'tom', 'andy', 'tom' ];
var 출석부2 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

출석부 = [...출석부2]; //괄호제거해서 배열에넣으면 됍니다~ 중복제거하고싶을때!

//Set 자료형에 반복문 돌리기

/* Ellipse */


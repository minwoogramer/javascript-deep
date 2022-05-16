var 어레이 = ['hello', 'world'];
console.log(어레이);
console.log(...어레이);
//Spread Operator는 간단한게 말하자면 괄호를 제거해주는 연산자라고생각하면됌
//위코드처럼 ...을 붙여주면 괄호가 제거되고 hello world라는 값이 나옴.


var 문자 = 'hello';
console.log(문자);
console.log(...문자);
//문자열을 분해해서 출력하고싶을때도 사용하면됌.
//console.log('h', 'e', 'l', 'l', 'o')
//문자안의 괄호를 제거해준다고 외워보자.

//자 그러면이걸 언제쓰냐
//1. Array 합치기/복사에 매우 자주 씁니다.
var a = [1,2,3];
var b = a;//이렇게 하면 값을 공유하기 때문에 쓸수가없을 이럴때 쓰는게 deep copy라고함
//reference data type 이기때문에 그대로 공유가된다고알고만있으면됌.
a[3] =4; //이러면 a와 b 둘 모두 [1,2,3,4]가 나옵니다.


var a = [1,2,3];
var b = [4,5];
var c = [...a, ...b];
//그래서 두개를 합치고싶으면 ...으로 deep copy를해줘서 합쳐주면됍니다,.
console.log(c);
//[1,2,3,4,5]가나옵니다.

// 2. Object 합치기/복사에 매우 자주 씁니다.
//object 두개를 합치고싶으면 어떻게할까
var o1 = { a : 1, b : 2 };
var o2 = { c : 3, 그리고 o1에 있는거 전부.. }

var o1 = { a : 1, b : 2 };
var o2 = { c : 3, ...o1 };
console.log(o2);//이렇게 해주면 됍니다.

//obj 키값이 중복되면 어떻게 해요?
var o1 = { a : 1, b : 2};
var o2 = { a : 3, ...o1 };
console.log(o2);

//이렇게 a라는 값이 중복이 발생하면 무조건 뒤에 오는 a가 이깁니다. 

//그래서 출력해보면 a : 1 이라는 자료가 담겨져있습니다.


// spread 연산자는 함수소괄호, 오브젝트 중괄호내, 어레이 대괄호내에서 보통 사용하셔야합니다. 

// 다른 곳에서 그냥 썼다간 에러가날 수 있습니다. 


//apply,call 함수가 뭘까?
var person = {
    인사 : function(){
      console.log(this.name + '안녕')
    }
}
  
var person2 = {
    name : '손흥민'
}
//person에 만들어놓은 멋진 person.인사()라는 함수를 person2에서도 쓰고 싶습니다. 
//그럴때 apply 라는함수를 사용하면됍니다.
person.인사.apply(person2);
person.인사.call(person2)
//apply 함수의 사용법은
//실행할함수.apply(적용할곳);
//call 과 apply의 차이점은 call은 넣을때 그냥넣고
//apply는 배열로 넣어야합니다.
//for에는 여러가지 자료형들이 있습니다.

// 그냥 for 반복문 (어려움)
// forEach() 반복문 (Array 전용)
// for in 반복문 (Object 전용)
// for of 반복문(iterable 전용)


// 반복문은 용도가 2개라고 보시면 됩니다. 

// 1. 코드 단순 반복

// 2. 자료형에 담긴 자료들을 하나씩 꺼내고 싶을 때 

var 오브젝트 = { name : 'Kim', age : 30 };

for (var key in 오브젝트) {
  console.log(오브젝트[key]);
}
// for in 반복문의 특징 1. enumerable한 것만 출력해줍니다
//enumerable이란?
var 오브젝트 = { name : 'Kim', age : 30 };

console.log( Object.getOwnPropertyDescriptor(오브젝트, 'name') ); 
//콘솔에 아래와 같이 나오는데 즉 셀수 있다 라는 뜻입니다.
{value: "Kim", writable: true, enumerable: true, configurable: true} 

// for in 반복문의 특징 2. 부모의 prototype에 저장된 것도 출력해줍니다.

class 부모 {
 
}
부모.prototype.name = 'Park';
// object의 부모의 유전자에 있는 속성도 반복문으로 출력해줍니다. 
var 오브젝트 = new 부모();

for (var key in 오브젝트) {
    console.log(오브젝트[key]);
  }
//  Park이라는 자료는 부모가 가지고 있는 것인데도 출력해줍니다. 
for (var key in 오브젝트) {
  if (오브젝트.hasOwnProperty(key)) {
    console.log(오브젝트[key]);
  }
}
//오브젝트.hasOwnProperty()라는 함수는

// 오브젝트가 이 key값을 직접 가지고 있냐라고 물어보는 함수입니다. 

// 갖고 있으면 true, 없으면 false를 뱉어줍니다. 

// 그래서 내가 가진 것만 반복시키고 싶으면 이걸 꼭 쓰셔야합니다. 

//for of 반복문 
//array, 문자, arguments, NodeList, Map, Set 이라는 자료형에 적용할 수 있는 반복문입니다. 
var 어레이 = [2,3,4,5];
for (var 자료 of 어레이) {
  console.log(자료);
}
//for of는 NodeList라는 곳에도 사용할 수 있는데 

document.getElementsByClassName()
document.querySelectorAll()
//이런애들을 쓰면
// [] 대괄호안에 담겨오는데 array는 아니고 NodeList라는 자료형이라고 부릅니다.

//예제
let 데이터 = [1,2,3,4,5,6,7,8,9]
let 데이터2 = [1,2,3,4,5,6,7,8,9]

for(let 자료 of 데이터){
   for(let 자료2 of 데이터2){
       let 구구단 =자료 * 자료2;
       console.log(구구단)
       구구단;
   }
}
//key 마지막에 숫자 붙어있는걸 찾아서 제거해주기
var products = [
    {
      name1 : 'chair',
      price1 : 7000,
    },
    {
      name2 : 'sofa',
      price : 5000,
    },
    {
      name1 : 'desk',
      price3 : 9000,
    },
  ]; 

  let newValue;
  let newKey;
  
  for (let item of products) {
    for (let key in item) {
       //마지막글자를 숫자로변환했을 때 NaN이 안나오면 (숫자면)
       if (isNaN(parseInt(key.slice(-1))) == false ) {
         newValue = item[key];
         newKey = key.slice(0, -1); 
         item[newKey] = newValue;
         delete item[key]; 
       }
    }
  }
  
  console.log(products)


함수();
function 함수() {
  console.log(안녕);
  let 안녕 = 'Hello!';
} 
//함수 실행전에 함수선언전에 해도 되냐?가능 호이스팅이 되기때문
//근데 문제가 뭐냐 안녕 만들기전에 안녕을 출력해서 에러가남
//변수가 할당되지않고 호이스팅되지않음 let,const는 hoisting시 undefined할당안됌

함수();
var 함수 = function() {
  console.log(안녕);
  var 안녕 = 'Hello!';
} 
//이거는 함수인데함수가아니라고 에러가남
//function 함수() { 전부 hoistiong됌
    
//}
 
let a = 1;
var 함수 = function() {
  a = 2;
}
console.log(a);//1이나옴 함수만들기만하고 실행을안했잖음.

let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b);
//b는 4가 나옴
//전역변수는 상위값보단 가까이 있는 변수값을 쓰려고하기때문에 a=1이됍니다.
//값은 5가나옴

setTimeout(function() { console.log(1); }, 1000 ); 
setTimeout(function() { console.log(2); }, 2000 ); 
setTimeout(function() { console.log(3); }, 3000 ); 
setTimeout(function() { console.log(4); }, 4000 ); 
setTimeout(function() { console.log(5); }, 5000 ); 

for (let i = 1; i < 6; i++) { 
    let i =0;
    setTimeout(function() { console.log(i); }, i*1000 ); 
  }
  //{ console.log(i); }는 바로 실행되는 코드강아님 1~5초뒤에 실행됌
  //빠르게 5번이 돌고난다음 안에 있는 함수를 실행시키는거임
  //var를 let으로 변경시키면됌
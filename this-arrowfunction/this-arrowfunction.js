 // 사람.sayHi()라고 작성하면 콘솔창에 '안녕 나는 손흥민' 이라는 글자가 나와야합니다. 

  //Q. sayHi()라는 함수를 어디서 어떻게 만들면 될까요? 


var 사람 = {
    name: '손흥민',
    sayHi :function (){
        console.log('안녕 나는' + this.name)//안쪽에 있는 객체의 이름을 출력해주세요~
     }
  }//arrow쓰면안됌
  
  사람.sayHi(); //안녕 나는 손흥민

//오브젝트 내의 데이터를 전부 더해주는 메소드만들기
//. 어떻게 코드를 짜면 될까요? 

// 조건) 위에있는 자료라는 object 중괄호 {} 내에 코드 작성 금지 
var 자료 = { 
    data : [1,2,3,4,5] 
  }
  자료.전부더하기 = function(){
      var 합 =0;
      this.data.forEach(function(e){
         합= 합+ e;
      })
  }//this.data=>자료에있는 배열값불러오는방법
// setTimeout 이용해보기

 //setTimeout(콜백함수, ms단위의 시간)

 function 함수(){
    console.log('안녕')
  }
  
  setTimeout(함수, 1000)

//   이렇게 한줄 쓰시면 1000ms 후에 왼쪽에 있는 콜백함수 내의 코드를 실행해줍니다. 

// 그럼 1초후에 안녕이 콘솔창에 출력되겠네요.

//버튼을 클릭하면 지금 누른 버튼에 담긴 글자를 출력하는 기능을 만들고 싶어서 이렇게 코드를 짰습니다. 
'use strict'
// 자바스크립트를 조금 엄격하게쓸수있음

//  x= 200; 이러면 이거 금지시킴

var x = 200; 이래야함
console.log(this);=>window
function 함수(){
console.log(this);
}
함수()=>undifined라고뜸
2.

var obj = {
data :'kim'
함수: function(){
console.log('안녕')
}
}
오브젝트.data;
오브젝트.함수();

// 3.기계안에서 쓰면 새로 생성되는 오브젝트를 뜻함
// 오브젝트내의메소드에서쓰면
// 그메소를 가지고있는 메소드

function 기계(){
this.이름 = "kim"
}
4.이벤트 리스너

// 이벤트 리스너 안에서 this를 쓰면

// this; e.currentTarget;이랑똑같음

var arr=[1,2,3]
arr.forEach((e)=>{
console.log(a)
}
document.getElementById('버튼').addEventListener('click', function(e){
  var 어레이 = [1,2,3];
  어레이.forEach(function(){
    console.log(this)
  });
});
// 내부 코드가 3번 반복됌

// 함수안에들어가는 함수를 콜백함수라고함

// 여기서 console.log(this)를넣으면 뭐나옴?
// 1번혹은 2번뜻이나옴

// 여기서의 this는
// 함수가쓰인위치에 따라 this가 변함

//일반함수에서 this는 window가나옴
// 엄밀히말하면 전역함수이기때문

// 오브젝트 내에서 콜백함수를 쓴다면 this는?
this.name
var 오브젝트 = {
  이름들 : ['김', '이', '박'];
  함수 : function(){
      오브젝트.이름들.forEach(() => {
        console.log(this)
      });
  }
}
//arrowfunction 특징 this를 변화시키지 않음


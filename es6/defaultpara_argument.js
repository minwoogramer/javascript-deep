function 임시함수(){
    return 10 
  }
  
  function 더하기 (a, b = 임시함수() ){
    console.log(a + b)
  }
  
  더하기(3);//함수인자로 여러가지값들이 들어갈수있게됌

  function 함수(a,b,c){
    for (var i = 0; i < arguments.length; i++){
      console.log(arguments[i])
    }
  }
  
  함수(2,3,4);
  //그러면 콘솔창에 [2,3,4]를 담은 array 비슷한 자료가 출력됩니다. 

// arguments는 즉, 모든 입력된 파라미터를 [ ] 안에 싸매주는 고마운 키워드였던 것이었습니다. 

// 이제 여러분이 파라미터들을 한꺼번에 다루고 싶을 때 자주 활용해주시면 됩니다. 

//arguments 단점 a,b,c 라는 파라미터만 출력하고싶으면 쪼개서 사용해야함
//해결법 Rest 파라미터
//...뜻 1.스프레드연산자2.레스트
function 함수2(...rest){
    console.log(rest)
}
함수2(1,2,3,4,5,6,7,8,9)
//함수안에들어온 array출력됌 [1,2,3,4,5,6,7,8,9]
//즉 모든 파라미터들을 []에 보관해줌
function 함수2(a,b, ...rest){
    console.log(rest)
}
함수2(1,2,3,4,5,6,7,8,9)
//이렇게하면 [3,4,5,6,7,8,9]까지만 출력됌
//즉 세번째 파라미터부터 출력이됍니다.

//모든 파라미터들을 하나씩 콘솔창에 출력해주는함수?

function 함수2(...rest){
    for(let i =0; i<rest.length; i++){
        consolg.log(rest)[i]
    }    
    
}
함수2(1,2,3,4,5)

//조심해야할껏
//rest는 항상 마지막에 써야함
console.log(['b', 'c', 'a'].sort())//문자 자료형은 .sort()자료형 붙이기가능


function 정렬(글자){
    [...글자].sort()
}
정렬('bear')
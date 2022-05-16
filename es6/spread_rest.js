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

//['a','b','e','r']출력됍니다

//글자세기('aacbbb') 라고 입력하면 콘솔창에

// { a : 2, b : 3, c : 1 }

// ▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.
function 글자세기(글){

    var 결과 = {};
      [...글].forEach(function(a){
          //object에 결과[a] (결과.a) 라는 항목이 있으면 값을 1을 더해주고 없으면 1로 등록해주세요~ 
         if( 결과[a] > 0 ){ 결과[a]++ } else { 결과[a] = 1 } 
      }); 
    console.log(결과)
    }

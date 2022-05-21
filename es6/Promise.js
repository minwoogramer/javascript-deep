첫째함수(()=>{
    둘째함수(()=>{
        셋째함수(()=>{
            
        })
    })
})
//코드가 더러워지는 콜백함수의 문제점을 해결하귀위해나온 Promise 코드 디자인패턴

var 프로미스 = new Promise()
프로미스
.then(function(){//프로미스가 성공일 경우 실행할 코드

})
.then(function(){

})//이렇게 하면 옆으로 길어지지않아서 좋음\

var 프로미스 = new Promise()
프로미스.catch(function(error){//실패할경우

})
var 프로미스 = new Promise()
프로미스.finally(function(error){//성공이든 실패든 실행되면실행

})

//프로미스는 성공/실패 판정하는 기계입니다.

var 프로미스 = new  Promise(function(resolve, reject){
    resolve();//성공판정내리는법
    reject(new Error)//실패판정내리는법
})
//어려운 연산이 끝나면 특정코드를 실행하고싶음
var 프로미스 = new  Promise(function(resolve, reject){
   var 어려운연산 = 1+1;//1+1연산이 끝나면 성공판정 내려주세요
   resolve(어려운연산);//파라미터안에 뭘넣으면 성공함수까지 들어감

})
var 프로미스 = new  Promise(function(resolve, reject){
    var 어려운연산 = 1+1;//1+1연산이 끝나면 성공판정 내려주세요
    reject();
 })

프로미스.then(function(결과){//성공했을때 실행되는 코드
    console.log('성공했어요')
    console.log(결과)
}).catch(function(){
    console.log('실패했어요')//실패했을때 실행되는 코드
    
})
//1.콜백 대신 예쁜코드
//2.성공/실패의 경우에 맞춰 각각 다른코드 실행가능

var 프로미스 = new  Promise(function(resolve, reject){
    //1초후에 성공하는 Promise 그리고 성공시 특정 코드를 실행하고 싶음
    setTimeout(function(){
        성공();
    }, 1000);
})
//프로미스의 3가지 상태
//1.성공하면 <resoved></resoved>
//2.판정 대기중이면<pending></pending>
//3.실패하면 <reject></reject>

//프로미스에대한이해
//그냥 코드를 이쁘게짤려고쓰는거에요 동기를 비동기적처리가가능하게 해주는 마법의 문법이아님

fetch().then().catch(function(){})//promise가 적용된곳

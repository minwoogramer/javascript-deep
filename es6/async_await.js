//async 키워드를 쓰면 Promise 오브젝트가 절로 생성됩니다. 
//그럼 이 함수 자체가 Promise가 되어버립니다. 
//그래서 이 함수를 실행할 때 뒤에 then을 붙일 수 있습니다. Promise니까요. 
//pomise 쓰기 싫으면 이거 쓰면 됍니다.
async function 더하기(){
    1 + 1 ;
  }
  //1+1이 성공하면 아래 함수 실행
  더하기().then(function(){
    console.log('더하기 성공했어요')
  });
// 1+1 값을 함수로 뱉고싶다면 return 으로 줘서 결과를 인자로 뱉어내주면됍니다.
  async function 더하기(){
    return 1 + 1 ;
  }
 
  더하기().then(function(결과){
    console.log(결과)
  });

  async function 더하기(){
    return Promise.reject('실패임')//then함수 강제로 실패시키는 방법
  }
  //1+1이 성공하면 아래 함수 실행
  더하기().then(function(){
    console.log('더하기 성공했어요')
  });


//   프로미스.then(function(){
//       console.log('성공했어요')
//   })
//   더하기().then(function(결과){

//   }
//   )
//await 프로미스 해결까지 기다려 라는 말입니다.=> 프로미스해결까지 기다림

  async function 더하기(){

  let 프로미스 = new Promise(function(res, err){
       let 힘든연산 = 1+1;
        성공(힘든연산);//프로미스 결과는 변수에 저장가능
    })//await은 프로미스 실패시 에러나고 멈춥니다.
    //이런걸 방지하기위해 try catch쓰세요
    try{
    let 결과 = await 프로미스;
    
    console.log(결과)
    }
    catch(err){
        console.log(err)
    }
  } 

//이런거 언제쓰냐면 순차적으로 많은걸 실행하고싶을때 쓰면됍니다
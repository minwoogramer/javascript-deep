let 사람 = {
    name: 'park',
    age: 30,
    nextAge(){//내년 age 아는 방법 this ==사람 object
        return this.age +1;
    },
    setAge(나이){//나이수정하는 함수
        return this.age = parseInt(나이);
    }
}

사람.age;
사람.nextAge();//그냥 위에꺼에 +1하면 더하면되는데 왜만들었음?
//1.object 자료가 복잡할때 이득
//2.object 자료 수정시 편리,실수방지,관리가능 ex)데이터 수정시 미리 검사가능1.문자열을 입력했을수도있잖아요?
사람.setAge(20)//데이터 수정해주는 함수를 제작

//But 복잡한 소괄호 꼴보기 싫다면.

let 사람2 = {
    name: 'park',
    age: 30,
    get nextAge(){//get함수들 특징 =>return 이 있어야함 데이터를 가져오는함수
        return this.age +1;
    },
    set setAge(나이){//set함수들 특징 =>파라미터가 1개 있어야함 데이터를 받아오기때문임
        this.age = parseInt(나이);
    }
}
사람.setAge='20'//안전
사람.nextAge;

//class에서 사용하는 get/set

class 인간{
  constructor(){
    this.name='park';
    this.age=20;
  }
  get nextAge(){
      return this.age +1;
  }
  set setAge(나이)
  {this.age = 나이;//안전장치 부여완료

  }
}
let 인간1= new 인간();
//데이터 출력/수정함수 만들어 쓰는이유?=>데이터의 무결성떄문입니다.

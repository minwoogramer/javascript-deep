//아주 중요한 자료들을 전부 변수에 담으려면?

var arr= [2,3,4];

var [a,b,c] = [2,3,4];//변수 세개를 만드는데 2랑 3이랑 4라는데이터를 집어넣어주세요

//arr destructuring 할때 몇개를 빼먹는다면?

var [a,b,c = 10] = [2,3];//등호로 기본값 지정가능

//이렇게하면 c는 10이나옴 or 아예 아무것도 할당을안하면 [] 이렇게 undifined라고뜸

var obj = {name: 'kim' , age: 30};
//obj 데이터를 꺼내 변수에 담으려면?
var name = obj.name;
var age = obj.age;

var { name, age } = {name: 'kim' , age: 30};

var { name, age =31 } = {name: 'kim'};//default도 지정가능
//만약 변수명이 마음에안든다 
var {name : 나이, age =31} = {name:'kim'}

var { name: 나이 = 'Park'} = {};

//반대로 변수들을 object에 집어넣고 싶은경우

var name = 'kim';
var age = 30;

var obj = {name : name, age :age};
//es6부터는 이게 이렇게 바뀝니다
var obj = {name, age}//name 이라는 key값에는 name이라는 변수가들어감

var obj = {name: 'kim', age:30};
function 함수 ({name, age}){
    console.log(name, age);
}
함수({ name :'kim', age:30});

var obj = {name: 'kim', age:30};
function 함수 ([name,age]){
    console.log(name, age);
}

함수([1,2])
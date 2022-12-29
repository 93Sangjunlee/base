let friend = {
    name:"철수", 
    age:13, 
    camp:"코드캠프"
}
// undefined
friend
// {name: '철수', age: 13, camp: '코드캠프'}

// js도 강제 개행(줄바꿈)을 무시한 상태로 출력한다.
friend.name
// '철수'
friend.age
// 13
friend.camp
// '코드캠프'
// ------------------------------------------------------------
// 배열 속에 객체를 넣을 때, 하나씩 넣게 되면 굉장히 비효율적이다.
// 따라서 객체를 배열화 하여서 넣어주면 되는데, 아래의 예시를 참고하자.
// let student1 ={
//     name: "길동",
//     pet: "강아지",
//     adress: "구로구"
// }
// let student2 = {
//     name: "철수",
//     pet: "고양이",
//     adress: "관악구"
// }
// let student3 = {
//     name: "다희",
//     pet: "고양이",
//     adress: "강서구"
// }
// 위 처럼 하나씩 등록하는 것 보다는 아래와 같이 객체를 배열화 하여 한번에 입력해보자.
// let student =[
//     {name: "길동", pet: "강아지", adress: "구로구"},
//     {name: "철수", pet: "고양이", adress: "관악구"},
//     {name: "다희", pet: "고양이", adress: "강서구"}
// ]
// ----------------------------------------------------------
// student[1]
// {name: '철수', pet: '고양이', adress: '관악구'}
// student[2]
// {name: '다희', pet: '고양이', adress: '강서구'}
// student[3]
// undefined
// student[0]
// {name: '길동', pet: '강아지', adress: '구로구'}
// 바로 위에 문단에서 student[3]은 실수이다. 그럼에도 불구하고 작성하는 이유는 
// 앞으로 인덱스를 활용할 상황이 많이 있을텐데, 이와 같은 실수를 또 하게 되면 굉장히
// 골치 아프기 때문에 지금 바로 리마인드 한 것이다. 제발 실수 하지 말자.
// 아래와 같이 해 주어도 된다.
// ----------------------------------------------------------
// let classmate =[
//     {name: "철수", age: 13, school: "다람초"},
//     {name: "영희", age: 8, school: "공룡초"},
//     {name: "훈이", age: 11, school: "거북초"}
//     ]
// undefined
// classmate
// (3) [{…}, {…}, {…}]
// 0
// : 
// age
// : 
// 13
// name
// : 
// "철수"
// school
// : 
// "다람초"
// [[Prototype]]
// : 
// Object
// 1
// : 
// age
// : 
// 8
// name
// : 
// "영희"
// school
// : 
// "공룡초"
// [[Prototype]]
// : 
// Object
// 2
// : 
// age
// : 
// 11
// name
// : 
// "훈이"
// school
// : 
// "거북초"
// [[Prototype]]
// : 
// Object
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
// at
// : 
// ƒ at()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ Array()
// copyWithin
// : 
// ƒ copyWithin()
// entries
// : 
// ƒ entries()
// every
// : 
// ƒ every()
// fill
// : 
// ƒ fill()
// filter
// : 
// ƒ filter()
// find
// : 
// ƒ find()
// findIndex
// : 
// ƒ findIndex()
// findLast
// : 
// ƒ findLast()
// findLastIndex
// : 
// ƒ findLastIndex()
// flat
// : 
// ƒ flat()
// flatMap
// : 
// ƒ flatMap()
// forEach
// : 
// ƒ forEach()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// join
// : 
// ƒ join()
// keys
// : 
// ƒ keys()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// map
// : 
// ƒ map()
// pop
// : 
// ƒ pop()
// push
// : 
// ƒ push()
// reduce
// : 
// ƒ reduce()
// reduceRight
// : 
// ƒ reduceRight()
// reverse
// : 
// ƒ reverse()
// shift
// : 
// ƒ shift()
// slice
// : 
// ƒ slice()
// some
// : 
// ƒ some()
// sort
// : 
// ƒ sort()
// splice
// : 
// ƒ splice()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// unshift
// : 
// ƒ unshift()
// values
// : 
// ƒ values()
// Symbol(Symbol.iterator)
// : 
// ƒ values()
// Symbol(Symbol.unscopables)
// : 
// {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]]
// : 
// Object
// 위 까지가 입력된 객체이고 아래는 결과를 출력한 것인데, 229문단에 보면 마침표가 아닌 쉼표가 쓰였다.
// 또 실수다. 실수 하지 말자
// classmate[0],school
// VM955:1 Uncaught ReferenceError: school is not defined
//     at <anonymous>:1:14
// (익명) @ VM955:1
// classmate[0].school
// '다람초'

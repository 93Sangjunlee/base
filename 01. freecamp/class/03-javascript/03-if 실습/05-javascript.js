// 조건문 실습 1
if(1+1 === 2) {
    console.log("정답임")
} else {
console.log("틀렸음")
}
// VM434:2 정답임
// undefined
// 3
// 3
if(!true) {
    console.log("정답임")
} else {
console.log("틀렸음")
}
// VM488:4 틀렸음
// undefined
if(true) {
    console.log("정답임")
} else {
console.log("틀렸음")
}
// VM501:2 정답임
// undefined
if(0) {
    console.log("정답임")
} else {
console.log("틀렸음")
}
// VM516:4 틀렸음
// undefined

// 조건문 실습 2--------------------------------------------------------------
// const profile = {
//     name: "국중범",
//     age: 5,
//     school: "동대"
// }
// // undefined
// if(profile.age >= 20) {
//     console.log("으른임")
// } else if(profile.age >= 8 && profile.age <= 19) {
// console.log("잼민임")
// } else if(profile.age <= 7) {
//     console.log("호랑이임")
// }
// VM6156:6 호랑이임

// 위에 있는 것들을 최적화와 에러 핸들링까지 생각해서 작성하게 되면 아래와 같다.

const profile = {
    name: "국중범",
    age: 31,
    school: "삼청교육대"
}

if(profile.age >= 20) {
    console.log("다 큰 호랑이입니다.")
} else if(profile.age > 7) {
    console.log("덜 큰 호랑이입니다.")
} else if(profile.age > 0) {
    console.log("고양이 입니다.")
} else if(profile.age <= 0) {
    console.log("생명이 아닙니다.")
    // 이 바로 위에 문단이 에러 핸들링이다.
}
// VM7267:2 다 큰 호랑이입니다,

// 이하 예제 자체 부여----------------------------------------------------------
const profile2 = {
    name: "국중범",
    age: 31,
    school: "삼청교육대"
}

if(profile2.school === "좋은 학교") {
    console.log("학군이 좋습니다.")
} else if(profile2.school === "삼청교육대") {
    console.log("국가 관련직입니다.")
} else if(profile2.school === "고양이입니다.") {
    console.log("고양이는 학교를 다닐 수 없습니다.")
} else if(profile2.school === "고졸") {
    console.log("무직일 가능성이 높습니다.")
}

// 이하 아픈 상처----------------------------------------------------------------
// const profile = {
    // name: "국중범",
    // age: 31,
    // school: "동대"
// }
// undefined
// if(profile>== 20)
//     console.log("성인임")
// }
// VM4434:1 Uncaught SyntaxError: Unexpected token '='
// www.google.co.kr/:1 Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
// if([profile] >== 20)
//     console.log("성인임")
// }
// VM4505:1 Uncaught SyntaxError: Unexpected token '='
// if(age >= 20)
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4731:3 Uncaught SyntaxError: Unexpected token '}'
// if(age >= 20){
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4737:1 Uncaught ReferenceError: age is not defined
//     at <anonymous>:1:1
// (익명) @ VM4737:1
// if(profile >= 20){
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4787:4 잼민이임
// undefined
// if(profile >== 20){
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4798:1 Uncaught SyntaxError: Unexpected token '='
// if(profile >= 20){
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4809:4 잼민이임
// undefined
// if(profile >= 30){
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4822:4 잼민이임
// undefined
// if(profile >= 40){
//     console.log("어른임")
// } else {
//     console.log("잼민이임")
// }
// VM4833:4 잼민이임
// undefined
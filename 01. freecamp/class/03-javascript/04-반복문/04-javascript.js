// 반복문 예제 1
const children = ["국중범", "변기목", "박장식"]
for(let i = 0; i < 3; i++) {
    console.log(children[i] + "입니다.")
}
// -------------------------------------------
// 반복문 예제 1은 조건문에 i < 3 이라고 숫자로 지정해 주었지만, 배열이 굉장히 길거나 복잡한 경우에는
// i < i.length로 써버리면 배열의 길이만큼 반복한다.

let persons = [
    {name: "국중범", age: 17},
    {name: "박강락", age: 27},
    {name: "황호강", age: 5},
    {name: "박장식", age: 65},
    {name: "이강재", age: 3}
]
// undefined
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log("사람과 비슷합니다.")
    } else {
        console.log("사람이 아닙니다.")
    }
    }
// 이하 출력값.
// VM9918:5 사람이 아닙니다.
// VM9918:3 사람과 비슷합니다.
// VM9918:5 사람이 아닙니다.
// VM9918:3 사람과 비슷합니다.
// VM9918:5 사람이 아닙니다.

// 변형 예제 1 / 배열의 값과 문장을 함께 출력할 때 사용된다.
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log(persons[count]. name+"는 사람이 아닙니다,")
    } else {
        console.log(persons[count]. name+"는 사람과 유사합니다.")
    }
    }
// 이하 출력값.
// VM10314:5 국중범는 사람과 유사합니다.
// VM10314:3 박강락는 사람이 아닙니다,
// VM10314:5 황호강는 사람과 유사합니다.
// VM10314:3 박장식는 사람이 아닙니다,
// VM10314:5 이강재는 사람과 유사합니다.

// 이하 예제 3----------------------------------------------------------
const fruits =[
    {number: 1, title: "레드향"}, 
    {number: 2, title: "샤인머스켓"}, 
    {number: 3, title: "산청딸기"}, 
    {number: 4, title: "한라봉"}, 
    {number: 5, title: "사과"}, 
    {number: 6, title: "애플망고"}, 
    {number: 7, title: "딸기"}, 
    {number: 8, title: "천혜향"}, 
    {number: 9, title: "과일선물세트"}, 
    {number: 10, title: "귤"} 
    ]
// undefined

for(let k = 0; k < fruits.length; k++) {
    console.log(fruits[k].number + "" + fruits[k].title)
}
// VM12022:2 1레드향
// VM12022:2 2샤인머스켓
// VM12022:2 3산청딸기
// VM12022:2 4한라봉
// VM12022:2 5사과
// VM12022:2 6애플망고
// VM12022:2 7딸기
// VM12022:2 8천혜향
// VM12022:2 9과일선물세트
// VM12022:2 10귤

// 위에 있는 것을 백틱과 달러 중괄호(`${}`)으로 감까주면 한 칸 띄어 진다.
// 백틱을 쓸 때는 문자와 숫자 등이 혼재되어 있을 때 압도적으로 편해진다.

for(let k = 0; k < fruits.length; k++) {
    console.log(`${fruits[k].number} ${fruits[k].title}`)
}
// VM12158:2 1 레드향
// VM12158:2 2 샤인머스켓
// VM12158:2 3 산청딸기
// VM12158:2 4 한라봉
// VM12158:2 5 사과
// VM12158:2 6 애플망고
// VM12158:2 7 딸기
// VM12158:2 8 천혜향
// VM12158:2 9 과일선물세트
// VM12158:2 10 귤

// 바로 아래는 백틱 예제
for(let k = 0; k < fruits.length; k++) {
    console.log(`과일 차트 ${fruits[k].number}위는 ${fruits[k].title}입니다.`)
}
// VM12178:2 과일 차트 1위는 레드향입니다.
// VM12178:2 과일 차트 2위는 샤인머스켓입니다.
// VM12178:2 과일 차트 3위는 산청딸기입니다.
// VM12178:2 과일 차트 4위는 한라봉입니다.
// VM12178:2 과일 차트 5위는 사과입니다.
// VM12178:2 과일 차트 6위는 애플망고입니다.
// VM12178:2 과일 차트 7위는 딸기입니다.
// VM12178:2 과일 차트 8위는 천혜향입니다.
// VM12178:2 과일 차트 9위는 과일선물세트입니다.
// VM12178:2 과일 차트 10위는 귤입니다.

// 줫같은 
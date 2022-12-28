// array_object-in_arry
let classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// VM380:1 Uncaught SyntaxError: missing ) after argument list
classmates.includes("훈이")
// true
classmates. length
// 3
classmates. concat(0,1)
// (5) ['철수', '영희', '훈이', 0, 1]
classmates.filter("영희")
// VM773:1 Uncaught TypeError: 영희 is not a function
    // at Array.filter (<anonymous>)
    // at <anonymous>:1:12
// (익명) @ VM773:1
classmates.pop(2)
// '훈이'
classmates.push("훈이")
// 3
classmates.pop(2)
// '훈이'
classmates
// (2) ['철수', '영희']
classmates.length
// 2
classmates.push("훈이")
// 3
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.length
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.pop()

// 이하 연습 2 - developers연습
let developer = ["돈", "명예", "사랑", "희망", "열정"]
// undefined
developer.length
// 5
developer.includes("돈")
// true
developer.includes("이잉")
// false
developer.push("노오력")
// 6
developer
// (6) ['돈', '명예', '사랑', '희망', '열정', '노오력']
developer[1]
// '명예'
// 인덱스는 0부터 카운트를 한다. - 첫 번째 배열 = 0, 두 번째 배열 = 1
dream.concat(developer)
// (9) ['커리어', '성공', '아캔두', '돈', '명예', '사랑', '희망', '열정', '노오력']
// 위와 같이 하면 드림 + 디벨로퍼이다. 순서를 바꾸면
// developer.concat(dream)으로 하면 디벨로퍼배열+드림배열 이렇게 된다.
let result = developer.concat(dream)
// undefined
result
// (9) ['돈', '명예', '사랑', '희망', '열정', '노오력', '커리어', '성공', '아캔두']
// 위와 같이 표현을 할 수도 있다. result는 변수이다.

const email = "fhuice@gmail.com"
// undefined
email
// 'fhuice@gmail.com'
email.length
// 16
// 문자열 자체를 배열로 만들고자 하면 위와 같이 const를 사용해서 작성하면 된다.
// 이메일 연습 예제는 01-parctice-email.js를 참고하자.
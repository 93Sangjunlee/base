// 실무예제 ㄱㄱ 받은 이메일 값의 메지막 4자리를 마스킹 처리하는 것임.
const email = "fhuice@gmali.com"
// undefined
email
// 'fhuice@gmali.com'
email.length
// 16
let userMail = email.split("@")[0]
// undefined
let companyMail = email.split("@")[1]
// undefined
userMail
// 'fhuice'
companyMail
// 'gmali.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['f', 'h', 'u', 'i']
maskingMail.pop()
// 'i'
maskingMail.push("*")
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail
// (6) ['f', 'h', 'u', '*', '*', '*']
maskingMail.pop()
// '*'
maskingMail.pop()
// '*'
maskingMail.pop()
// '*'
maskingMail.pop()
// 'u'
maskingMail
// (2) ['f', 'h']
maskingMail.push("*")
// 3
maskingMail.push("*")
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail
// (6) ['f', 'h', '*', '*', '*', '*']
maskingMail.join("")
// 'fh****'
maskingMail.join("")+"@"+companyMail
// 'fh****@gmali.com'
let result = maskingMail.join("")+"@"+companyMail
// undefined
result
// 'fh****@gmali.com'
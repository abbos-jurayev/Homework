let name = prompt('ismingizni kiriting')
let surname = prompt('familyangizni kiriting')
let age = prompt('yoshingizni kiriting')

let obj = {
    name : name,
    surname:surname,
    age : age
}
if(age < 16){
    obj.age = "maktab o'quchisi"
} 
else if(age <= 18 ){
    obj.age = 'pasport olgan'
}
else if(age > 16 ){
    obj.age = 'maktabni bitirgan'
}
console.log(obj)

let rang = prompt('yashil,sariq va qizil')
let rang_1 = "yashil,sariq, qizil"
if(rang ==='yashil'){
    rang_1 = 'sariq'
}
else if(rang === 'sariq'){
    rang_1 = 'qizil'
}
else if(rang === 'qizil'){
    rang_1 = 'yashil'
}
console.log(rang_1)
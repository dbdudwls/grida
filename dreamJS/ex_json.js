
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(["apple", "banana"])
console.log(json)

// 객체 생성
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
// 객체를 JSON 문자열로 변환
let jsonStr = JSON.stringify(person);
// JSON 문자열 출력
console.log(jsonStr);

jsonStr = JSON.stringify(person, ['name']);
console.log(jsonStr)

jsonStr = JSON.stringify(person, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'ellie' : value;
});

console.log(jsonStr)

// JSON 형식의 문자열
var pa = '{"name":"John","age":30,"city":"New York"}';

// JSON 문자열을 JavaScript 객체로 변환
var per = JSON.parse(jsonStr);

// JavaScript 객체 출력
console.log(per);
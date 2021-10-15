// 기본 자료형은 객체가 아니므로 속성을 가질 수 없다
const c = 12;
c.test = '짖어';
console.log(c.test);            // undefined




// 기본 자료형을 객체로 선언하기
// Number, String, Boolean

const f = new Number(200);
console.log(f);                 // [Number : 200]
console.log(typeof f);          // object

f.test = 10;
console.log(f.test);            // 10

console.log(f+10);              // 210

console.log(f.valueOf());       // 200

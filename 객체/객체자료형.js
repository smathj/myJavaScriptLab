// 속성과 메소드를 가질 수 있다면 그것은 객체이다


// 배열도 객체다
const a = [];
a.test = 10;
console.log(a.test);



// 함수도 객체다
function b () {

}

b.test = 10;
console.log(b.test);

// 그러므로 typeof 으로 자료형을 출력하면 'object'라고 나온다
console.log(typeof a);          // object
console.log(Array.isArray(a));  // true


// 그중 함수는 , 실행이 가능한 객체 로서
// function이라고 나오며 이는 일급객체에 속한다고 한다
console.log(typeof b);  // function (일급 object)


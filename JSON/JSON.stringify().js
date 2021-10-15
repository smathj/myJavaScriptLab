// 1. "값"을 표현할때 문자열,숫자,불만 가능하다(함수 x)
// 2. 문자열을 반드시 " " 로 감싸야한다(쌍따옴표)
// 3. "키"도 반드시 " " 로 감싸야한다 (쌍따옴표)

// 자바스크립트 객체를 JSON 문자열로 변환할때
// JSON.stringify() 사용
function jic(key,value) {

    console.log(key);
    console.log(value);

    if(typeof value === 'string') {
        return undefined
    }
    return value;
}

const data = [
                {
                    dogName : '믹키하북',
                    type    : 'myWhiteDog'
                }, 
                {
                    catName : '알콜키북',
                    type    : 'myBlackDog'
                }
            ];

console.log(JSON.stringify(data));

console.log('------------------------------------');

console.log(JSON.stringify(data, null, 2)); // 들여쓰기 2칸
// console.log(JSON.stringify(data, jic, 2));
const numbers = [0,1,2,3,4,5];
const evenNumbers = numbers.filter(function(value) {
    return value % 2 === 0; // 짝수만 담자
});


console.log(`원래 배열 : ${numbers}`);
console.log(`짝수만(필터) 배열 : ${evenNumbers}`);
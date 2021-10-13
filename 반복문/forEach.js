const numbers = [2,3,54,1,2,3];

numbers.forEach(function(value,index,array) {
    console.log(value);
    console.log(index);
    console.log('원본 배열 : ' + array);
    console.log('-----------------------------------');
});
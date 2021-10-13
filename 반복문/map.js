let members =['키링','하북','나북','버거','대리'];

console.log(members);

// 배열의 요소마다 루핑을 돌면서 리턴한걸로 새로운 배열을 쓴다
members = members.map(function(value,index,array) {

    // console.log('--------------------------------');
    // console.log(array);

    return value + '쿤'
});

console.log(members);
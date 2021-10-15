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

let parse = JSON.stringify(data);
console.log(parse);

console.log(JSON.parse(parse));

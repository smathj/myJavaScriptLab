const object = {
    dog_name : '하북이',
    man : true
};

const {dog_name, man} = object;

// console.log(dog_name);
// console.log(man);


const {otherName = dog_name, otherName2 = man} = object;

// console.log(otherName);
// console.log(otherName2);

const myDog = {
    "이름" : "키북",
    "나이" : "생후3개월",
    "종자" : "수컷"
};

const myDogs = {
    ...myDog,   // 전개시킨다(펼침)
    "1차_백신_접종여부" : true,
    "2차_백신_접종여부" : false
}

// console.log(myDogs);
console.log(JSON.stringify(myDogs,null,2));
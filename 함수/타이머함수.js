setTimeout(() => {
    console.log('1초 후에 실행합니다')
}, 1 * 1000);

let count = 0;

setInterval(() => {
    console.log(`1초 마다 실행됩니당. (${count} 번째)`);
    count++;
}, 1 * 1000);



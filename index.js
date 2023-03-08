// Code your solutions in this file
function writeCards(name, event) {
    const myArray = [];
    for (let i = 0; i<name.length; i++) {
        const message =
        `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
        myArray.push(message);
    }
    return myArray;
}
function countDown(num) {
    do {
        console.log(num);
        num--;
    }
    while (num >= 0);
}
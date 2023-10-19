// const time = new Date();
// console.log(time.getDate());
// console.log(time.toLocaleDateString())
// console.log(time.toString())

const t = new Date('10-10-2023')
// console.log(t.toLocaleDateString())


let timeStamp = Date.now();
console.log(timeStamp);
console.log(t.getTime());

timeStamp.toLocaleString('default','weekday','narrow');


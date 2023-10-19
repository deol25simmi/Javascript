const name = "sam"
const id = 15

/// best and modern way for strings  =>string interpolation  
//console.log(`hello  my name is ${name} and my id is ${id}`);

// way to declare a string
const newStr = new String("simmi")
// console.log(newStr.__proto__)
// console.log(newStr.length)
// console.log(newStr.toUpperCase())
//console.log(newStr.charAt(0));
//console.log(newStr.indexOf('i'));

//slicing
const n = newStr.substring(0,4)
//console.log(n);
let m = newStr.slice(-5,3);
//console.log(m);


//
let st = "https://www.mod1ee1.com"
// console.log(st.replace('1','2'))
// console.log(st);
console.log(st.includes('htt'))


console.log(st.split('.'));
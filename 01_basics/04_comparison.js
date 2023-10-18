// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

// console.log("2">1);  // true
// console.log("02" >1);   // true

// console.log(null >0);  // false
// console.log(null==0);   //false
// console.log(null>=0);  // true
// it happens  because the  equaltiy check ==  and other comparators like < > <= >= work 
// differently. comparisons convert null to 0 that's why null>=0 is true.

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined <=0);
// all of the three above evaluates to be false


//strict check
console.log("12"===12);  // as datatypes are different and value is same

// Method One 1.     String.concat()

const firstString = 'Hello i am ' ;
const secondString = 'Javascript String ' ;
//const thirdString = 'and me 3' ;
// const fourString = 'and me 3' ;


const concatString = firstString.concat( secondString )  // thirdString , fourString ,   we can pass countless methods  ;
console.log(concatString);



// Method 2.   String.slice()
const newString = 'I love India' ;
const sliceString  = newString.slice(0 , 6);   //  return 0 to 6 words count space 1
console.log(sliceString); //  I love ; 


// Method 3 . String.split() 
const splittString = 'I-love-India-and-Indian-People' ;
const spliting   = splittString.split('-');     // remove all - and return in array also try with ( 'I' )
console.log(spliting) ;  // [ 'I', 'love', 'India', 'and', 'Indian', 'People' ]


// Method 4  String.toLowerCase()
const lowerString  = 'HY i am THE LOWER CASE' ;
const lowerCaseString = lowerString.toLowerCase();
console.log(lowerCaseString);  // hy i am the upper case


//Method 5 String.toUperCase()
const uperString = 'Hy i am a upperCase string' ;
const uperCaseString = uperString.toUpperCase() ;
console.log(uperCaseString) ;     // output :  HY I AM A UPPERCASE STRING

//Method 6 String.trim() 
const trimString = '     hello you look good';
const aftertriming = trimString.trim();
console.log(aftertriming);  // Remove white space from and return new string
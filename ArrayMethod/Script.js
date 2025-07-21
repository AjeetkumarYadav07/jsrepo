// ----  Method 1. Array.map()  ----- //

const mapArray = [1, 2, 3, 4];
const doubled = mapArray.map((num) => num * 2); // return new array with multiplying by 2

console.log(doubled);

// Logic behaiend the Map method ;

const doubledArr = [];
for (let i = 0; i < mapArray.length; i++) {
  doubledArr.push(mapArray[i] * 2); // Output 2 ,4 ,6,8
}
console.log(doubledArr);



//  ----- Method 2 . Array.filter()   -----  //
const list = [1, 2, 3, 4, 5];
const filteredList = list.filter((num) => num !== 2);
console.log(filteredList); // output : 1 ,3 ,4,5     => 2 will removed

// Real Life Examples
//1. 📱 Filtering out banned users from a chat app
const users = ["Alice", "Jhone", "Harry"];
const bannedUsers = ["Jhone"];

const activeUsers = users.filter((user) => !bannedUsers.includes(user));
console.log(activeUsers); // Output : Alice , Harry

// 2. 📅 Filtering upcoming events
const events = [
  { name: "Meeting", date: "2025-07-10" },
  { name: "Past Event", date: "2025-07-01" },
];

const today = new Date("2025-07-09");
const upcomingEvents = events.filter((event) => new Date(event.date) > today);
console.log(upcomingEvents); // [{ name: 'Meeting', date: '2025-07-10' }]

//3. 💰 Filtering out out-of-stock products
const products = [
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: false },
];

const availableProducts = products.filter((p) => p.inStock);
console.log(availableProducts); // [{ name: 'Phone', inStock: true }]

// wihtout using Filter ()
const numbers = [1, 2, 3, 4, 5, 6];
const output = []; // Output 1 , 3 ,5 ;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    output.push(numbers[i]);
  }
}
console.log(output);



// -------  Array.reduce() ---------- //
//          Basic Syntax
//   array.reduce(callback, initialValue)   //

const numb = [1, 2, 3, 4];
const total = numb.reduce((acc, curr) => acc + curr, 0);
console.log(total); // Output = 10

//---same task without using reduce -- //

const nums = [1, 2, 3, 4];
let totalnum = 0;

for (let i = 0; i < nums.length; i++) {
  totalnum += nums[i];
}

console.log(totalnum);

// ------   4. Real-World Use Cases -----      //
//  --- 🏢 A. Total Cart Price (e-commerce) ----//

const cart = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 80 },
];

const cartTotal = cart.reduce((acc , item) => item + item.price  , 0);
console.log(cartTotal) ;    // Output :  1300



//-----   5. Array.fill() ----- //
  //--   Array.fill(value  , start , end) --//

  let password = [1 , 2 ,3 ,5 ,6,9];
   password.fill(0);
   console.log(password) ; // output : [0 , 0 , 0, 0, 0, 0, 0, 0];


   let num = [1 , 2, 3, 4, ,5,6];
   num.fill(8,1,4);
   console.log(num)  // Output : [1 , 8 ,8 ,8 , 5 , 6 ]

  //-- Create new Array by using fill() -- //

const arr = new Array(10).fill(2) ; // it creates an array with length =  10 and value =2 ;



// Method no: 6  ----- Array.find() ------ //

const findlist = [1 ,2 , 4, 5] ;
const findel = findlist.find((el) => el === 2);
const findel2 = findlist.find((el) => el === 99);
console.log(findel) //  -- return // 2 
console.log(findel2); // --return : undefind 

  // --- if we want to do same task mannual --- 

  const arrlist = [ 2 , 3,  5, ,64 , 54];
  const target = 54 ;
  let findOutput  ;

  for(let i = 0 ; i< arrlist.length ; i++){
    if(arrlist[i] === target){
      output = arrlist[i] 
      break 
    }
  }

  console.log(findOutput);




//  Method no7 -------  Array.indexOf() ------- //
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
  const indexlist = [1 , 2 , 3, 5, 8];
  indexlistlist.indexOf(3) ;  // Ouput : 2 ;
  indexlist.index(99)   ;     // Output : -1 ;


    // ---- mannual without using method ---
  const sevenlist =  [ 1 , 3, 4 ,5 , 12, 14];
  const seventarget = 5 ;
  let sevenOutput = -1 ; 

  for(let i = 0 ; i<sevenlist.length ; i++){
    if(sevenlist[i] === seventarget){
      sevenOutput = i ;
      break
    }
  }
  console.log(sevenOutput);
  



  // --- Method no 8 array.shift() ---- //
    // -- removes the 1st element from an array : also change the orignal array 
    
    let colors = [red , green , blue] ;
    let firstcolor = colors.shift() ;

    console.log(firstcolor) //   Output : red 
    console.log(colors)   // Output :  [green , blue];



    // -------  Method no 9 array.unShift()  ----- //
      // --- add new element in the 1st postion ----   Changed in original array  //
    let marks = [12 , 23 , 44, 33];
    let newMarks = marks.unshift(9);
   
      console.log(marks)      // Output : [9 , 12 ,23 , 44 , 33];

      // --- mannual unShift without using mehtods 

      function mannualShift (arr , value) {
         for(let i = arr.length ; i > 0 ; i --){
           arr[i] = arr[i-1];
         }
         arr[0] = value ;
         return arr.length 
      } 
      let a = [15 , 22 , 33 ];
      mannualShift(a , 11) ;    //  Output = [11 , 15 , 22 , 33]



 
      // ---- Methodno 10  Array.Splice() --- 

      const splicelist = [1, 2, 3, 4, 5];
list.splice(1, 2); // [2, 3]
list; // [1, 4, 5]


  // ---- Method no 11   Array.slice() ---- //

const fruits  = ['Apple' , 'banana' , 'Mango' ,'cheery'] ;
const sliced = fruits.slice(1 , 3);
console.log(fruits) ;
console.log(sliced);



// ------ Method no 12  Array.join() ---- //
    // --- Joins all elements of an array into a string.  ---- //

    console.log("helloo js");

const customers = [
  {
    id: 1,
    name: "Alice",
    orders: [
      {
        orderId: "A100",
        date: "2025-07-15",
        products: [
          { productId: "P1", name: "Laptop", price: 1000, quantity: 1 },
          { productId: "P2", name: "Mouse", price: 50, quantity: 2 }
        ]
      },
      {
        orderId: "A101",
        date: "2025-07-18",
        products: [
          { productId: "P3", name: "Monitor", price: 200, quantity: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Bob",
    orders: [
      {
        orderId: "B200",
        date: "2025-07-19",
        products: [
          { productId: "P1", name: "Laptop", price: 1000, quantity: 2 },
          { productId: "P4", name: "Keyboard", price: 80, quantity: 1 }
        ]
      }
    ]
  }
];

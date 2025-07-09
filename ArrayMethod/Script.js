// Method 1. Array.map()

const mapArray = [1 ,2 , 3, 4];
const doubled = mapArray.map((num => num*2));  // return new array with multiplying by 2

console.log(doubled);

  // Logic behaiend the Map method ;

 const doubledArr = [] ;
 for(let i = 0 ; i < mapArray.length ; i++){
    doubledArr.push(mapArray[i] *2) // Output 2 ,4 ,6,8

 }

 console.log(doubledArr);



 // Method 2 . Array.filter()  
  const list = [1 ,2 ,3 ,4 ,5] ;
  const filteredList = list.filter(num => num !==2 );
  console.log(filteredList);

   // Real Life Examples 
   //1. 📱 Filtering out banned users from a chat app
    const users = ['Alice' , 'Jhone' , 'Harry'];
    const bannedUsers = ['Jhone'] ;

   const activeUsers = users.filter(user  => !bannedUsers.includes(user) );
    console.log(activeUsers);


   // 2. 📅 Filtering upcoming events
    const events = [
  { name: 'Meeting', date: '2025-07-10' },
  { name: 'Past Event', date: '2025-07-01' }
];

const today = new Date('2025-07-09');
const upcomingEvents = events.filter(event => new Date(event.date) > today);
console.log(upcomingEvents); // [{ name: 'Meeting', date: '2025-07-10' }]

     

//3. 💰 Filtering out out-of-stock products
  const products = [
  { name: 'Phone', inStock: true },
  { name: 'Tablet', inStock: false }
];

const availableProducts = products.filter(p => p.inStock);
console.log(availableProducts); // [{ name: 'Phone', inStock: true }]

   
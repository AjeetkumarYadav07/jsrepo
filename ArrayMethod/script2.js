// default array

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
          { productId: "P2", name: "Mouse", price: 50, quantity: 2 },
        ],
      },
      {
        orderId: "A101",
        date: "2025-07-18",
        products: [
          { productId: "P3", name: "Monitor", price: 200, quantity: 1 },
        ],
      },
    ],
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
          { productId: "P4", name: "Keyboard", price: 80, quantity: 1 },
        ],
      },
    ],
  },
];

// Q  1. Get All Customer IDs
// Use .map() to get an array of all customer ids.
const ids = customers.map((customer) => customer.id);
console.log(ids); // Output [1 ,2];

//  2. Get Customers with ID Greater Than 1
// Use .filter() to return customers whose id is greater than 1.
 const idnot1 = customers.filter((customer) => customer.id > 1 );
 const idisnot1 = customers.filter((customer) => customer.id != 1);
 console.log(idnot1);

// 3. Get All Customer Names in Uppercase
//Use .map() to return names like: 
const upperName = customers.map((customer) => customer.name.toUpperCase() );
console.log(upperName);

//4. Filter Customers Whose Name Starts with 'A'
//Use .filter() to return only customers whose name starts with A.
const nameA = customers.filter((customer) => !customer.name.includes("B"));
console.log(nameA);

//5. Add a New Field to Each Customer (e.g., status: "active")
//Use .map() to return a new array where each customer has an added status field:

const addStatus = customers.map((customer) => {
    return {...customer , status: "Active"}
} );
console.log(addStatus);

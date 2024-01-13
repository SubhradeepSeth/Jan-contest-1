/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e) => {
    if (e.profession === "developer") console.log(`${e.name} is a developer`);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach
  ((e) => {
    if (e.profession === "developer") console.log(`${e.name} is a developer`);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"} );
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const brr=arr.filter((e)=>{
    return (e.profession!=="admin") 
  });
  console.log(brr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "alice", age: "22", profession: "designer" },
    { id: 5, name: "bob", age: "25", profession: "manager" },
    { id: 6, name: "emma", age: "23", profession: "engineer" },
  ];

  let combo=arr.concat(newArr);
  console.log(combo);
  
}

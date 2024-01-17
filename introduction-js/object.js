// ============= OBJECT JS =============== //

var student = { id: 121, phone: 777, name: "Shakil" }
var student2 = { id: 233, phone: 444, name: "Bappy" }

// var phoneNo = student.phone;
var phoneNo = student["phone"];
// var stdName = student2.name;
var proName = "phone";
var stdName = student[proName];

console.log(stdName);
console.log(phoneNo);
console.log(student2)
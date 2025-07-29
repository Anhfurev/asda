// let a = [
//   { name: "boldoo", age: 12 },
//   { name: "bolroo", age: 15 },
//   { name: "olroo", age: 11 },
// ];
// let bra = a.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(bra);
let students = [
  { name: "boldoo", age: 12, gender: "male", balance: 3000, grade: 11 },
  { name: "bolroo", age: 15, gender: "male", balance: 4000, grade: 16 },
  { name: "olroo", age: 11, gender: "male", balance: 37000, grade: 115 },
  { name: "ohinoo", age: 17, gender: "female", balance: 3700, grade: 13 },
  { name: "urnaa", age: 21, gender: "female", balance: 35000, grade: 15 },
];
// let nasandHursenn = students.filter((student) => {
//   if (student.age >= 18) {
//     return student;
//   }
// });
// console.log(nasandHursenn);

// function findStudentsByGender(students, search) {
//   const filteredStudents = students.filter((student) => {
//     if (student.gender === search) {
//       return student;
//     }
//   });

//   return filteredStudents;
// }

// console.log(findStudentsByGender(students, "female"));
// nasand hursen suragchiig filterlej oloh function bich
// gender ogonguut tuhain gendereer filterlej ogoh function bich
// eg: filterByGender(students,"male") => zovhon erchuudiig yalgaj ogno
// nasaar n sortloh function bich
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich
// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]
// removeGenders from student array function bich
function filterByAge(students, Age) {
  const Filtered = students.filter((student) => {
    if (student.age === Age) return true;
    else return false;
  });

  if (Filtered.length === 0) {
    return "ilersengui";
  }
  return Filtered;
}
let a = filterByAge(students, 17);
console.log("result = ", a);
function higherBalance(students, search) {
  let higherStudents = students.filter((student) => {
    return search < student.balance;
  });
  return higherStudents;
}
let bro = higherBalance(students, 3000);
console.log("high balance than search students", bro);

function addClassCodeToStudents(students,utga) {name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"}
let resuk = addClassCodeToStudents(students, "{bongo:12}");
console.log(resuk);

/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes

1. select only the arrays in the array with attendance <= 8.
2. Pick up only the names of those arrays.
  */

function getEligibleStudents(presence) {
 const eligibles = presence.filter(stuAttend => stuAttend[1] >= 8);
 if (eligibles === []){
   return [];
 } else {
 return eligibles.map(stuAttend => stuAttend[0]);
}}

/* My notes for the above codes
.map gets an array of only names having >=8 attendance and rest undefined 
so the chained .filter picks out the array of names ignoring the undefined.
if there is not array with student having attendance >=8 then eligibles
array contains no element to filter and returns []


/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});

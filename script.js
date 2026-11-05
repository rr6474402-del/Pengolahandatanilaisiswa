const students = [
  { name: "Michael Hizkia", score: 88 },
  { name: "Reyvan Fadillah", score: 72 },
  { name: "Taufan Jap", score: 94 },
  { name: "Leonel Kiano Dimitri", score: 65 }
];

console.log("--- DATA AWAL SISWA ---");
console.log(students);

console.log("\n--- 1. forEach() ---");
students.forEach(function(student) {
  console.log("Siswa: " + student.name + " | Nilai: " + student.score);
});

console.log("\n--- 2. filter() (Nilai > 80) ---");
const siswaLulus = students.filter(function(student) {
  return student.score > 80;
});
console.log(siswaLulus);

console.log("\n--- 3. map() (Nama Saja) ---");
const daftarNama = students.map(function(student) {
  return student.name;
});
console.log(daftarNama);

console.log("\n--- 4. find() (Nilai >= 90) ---");
const siswaTerbaik = students.find(function(student) {
  return student.score >= 90;
});
console.log(siswaTerbaik);
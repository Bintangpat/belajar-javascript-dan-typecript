//variabel
// const umur = 20;
// umur = 21; // error karena variabel const tidak bisa dirubah nilainya
// console.log(umur);

//variabel
let usia = 20;
usia = 21; // boleh karena variabel let bisa dirubah nilainya
console.log(usia);

//Objek
let user = {
  nama: "Bintang",
  umur: 20,
  isPremium: true,
};

const pengguna = {
  nama: "Dinda",
  umur: 13,
  isPremium: true,
};

console.log(user);
console.log(pengguna);
console.log(user.nama); // Output :bintang
console.log(pengguna.nama); // Output: Dinda

pengguna.nama = "rezka"; // merubah variable const
user.nama = "patra"; // merubah variabel let

console.log(user.nama); // Output: patra
console.log(pengguna.nama); // Output :rezka

console.log(user.isPremium); // Output: true
console.log(user.umur); // Output: 20

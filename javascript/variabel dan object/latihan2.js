// Kita punya objek data produk
let produkToko = {
  namaBarang: "Laptop Asus",
  harga: 10000000,
};

// Function dengan parameter berupa objek
function cekHargaMember(barang) {
  let hargaFinal = barang.harga - 500000; // Potongan khusus member
  return hargaFinal;
}

// Cara memanggilnya
let hargaUntukBintang = cekHargaMember(produkToko);
console.log(hargaUntukBintang); // Output: 9500000

// TANTANGAN: Perbaiki kode di bawah ini agar mengembalikan nilai string yang benar!

let handphone = {
  merk: "iPhone 15",
  harga: 15000000,
};

function cetakInfoHandphone(hp) {
  return "Hp" + merk + "harganya " + harga;
}

let hasil = cetakInfoHandphone(handphone);
console.log(hasil);

//Jawaban

let handphone1 = {
  merk: "iPhone 15",
  harga: 15000000,
};

function cetakInfoHandphone1(hp1) {
  return `Hp ${hp1.merk} harganya ${hp1.harga}`;
}

let hasil1 = cetakInfoHandphone1(handphone1);
console.log(hasil1);

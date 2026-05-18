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
  // SAYA INGIN FUNGSINYA MENGEMBALIKAN (RETURN) TEKS: "Hp iPhone 15 harganya 15000000"
  // Jalur kode di bawah ini masih salah, coba perbaiki:
  return `Hp ${hp.merk} harganya ${hp.harga}`;
}

let hasil = cetakInfoHandphone(handphone);
console.log(hasil);

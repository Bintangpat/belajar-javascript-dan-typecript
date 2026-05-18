// Sebuah Array yang berisi 2 buah Object produk
const keranjangBelanja = [
  { namaBarang: "Kaos Polos", harga: 50000 },
  { namaBarang: "Celana Jeans", harga: 150000 },
];

// Cara mengakses harga Celana Jeans:
console.log(keranjangBelanja[1].harga); // Output: 150000

//Tantangan : Buat function dengan menggunakan for loop untuk menghitung keseluruhan gaji karyawan dalam array
const dataKaryawan = [
  {
    nama: "Bintang",
    jabatan: " Programmer",
    gaji: 5000000,
    status: "karyawan tetap",
  },
  {
    nama: "Patra",
    jabatan: "Web Developer",
    gaji: 3000000,
    status: "karyawan tetap",
  },
  {
    nama: "Wijaya",
    jabatan: "UI/UX Designer",
    gaji: 3000000,
    status: "karyawan kontrak",
  },
];

//Jawaban
// function hitungTotalGajiSemuaKaryawan(parameterDataKaryawan) {
//   let total = 0; // untuk menamgpung nilai dari gaji nanti
//   for (const gajikaryawan of parameterDataKaryawan) {
//     total = total + gajikaryawan.gaji;
//   }
//   return total;
// }

// const totalGaji = hitungTotalGajiSemuaKaryawan(dataKaryawan);
// console.log(`Total semua gaji karyawan adalah ${totalGaji}`);

const daftarSiswa = [
  { nama: "Ahmad", nilai: 80 },
  { nama: "Siti", nilai: 95 },
];

function cariNilaiTertinggi(listSiswa) {
  // SAYA INGIN FUNGSINYA MENGEMBALIKAN (RETURN) NILAI MILIK SITI, YAITU: 95
  // Namun kode di bawah ini salah dan memicu eror.

  let nilaiMaksimal = listSiswa[1].nilai;
  return listSiswa.nilai;
}

const hasilCari = cariNilaiTertinggi(daftarSiswa);
console.log(hasilCari);

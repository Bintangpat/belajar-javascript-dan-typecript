const datakaryawan = {
  nama: "Bintang",
  gaji: {
    upah: 1000000,
    tunjangan: 500000,
    transportasi: 200000,
    makan: 500000,
  },
};

function gajiBersih(data) {
  const gajibersih =
    data.gaji.upah +
    data.gaji.tunjangan -
    data.gaji.transportasi -
    data.gaji.makan;
  return `gaji ${data.nama} adalah ${gajibersih}`;
}

console.log(gajiBersih(datakaryawan));

// TANTANGAN: Perbaiki kode di bawah ini agar function menghitung total pengeluaran dengan benar dan mencetaknya!

let pengeluaranBulanIni = {
  bulan: "Agustus",
  rincian: {
    listrik: 300000,
    air: 150000,
    internet: 400000,
  },
};

function hitungPengeluaran(data) {
  let total = data.listrik + data.air + data.internet;
  return "Total pengeluaran bulan " + bulan + " adalah " + total;
}

let hasilPengeluaran = hitungPengeluaran(pengeluaranBulanIni);
console.log(hasilPengeluaran);

//Jawaban

let pengeluaranBulanIni1 = {
  bulan: "Agustus",
  rincian: {
    listrik: 300000,
    air: 150000,
    internet: 400000,
  },
};

function hitungPengeluaran1(data1) {
  let total1 =
    data1.rincian.listrik + data1.rincian.air + data1.rincian.internet;
  return `Total pengeluaran bulan ${data1.bulan} adalah ${total1}`;
}

let hasilPengeluaran1 = hitungPengeluaran1(pengeluaranBulanIni1);
console.log(hasilPengeluaran1);

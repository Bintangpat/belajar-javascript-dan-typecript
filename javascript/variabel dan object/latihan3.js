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

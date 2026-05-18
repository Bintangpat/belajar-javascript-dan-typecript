// tujuan membuat sebuah function yang mengubah sebuah properti dalam sebuah object

let user = {
  name: "Bintang",
  status: {
    premium: false,
    online: true,
  },
};

const subsribeYoutubePremium = true;

function changeSubscribePremium(datauser, subsribeYoutubePremium) {
  datauser.status.premium = subsribeYoutubePremium;
}
changeSubscribePremium(user, subsribeYoutubePremium);
console.log(
  `${user.name} sekarang berstatus ${user.status.premium ? "Premium" : "Biasa"}`,
);

// TANTANGAN: Perbaiki function di bawah ini agar properti role dari object berubah dengan benar!

let admin = {
  nama: "Rudi",
  akses: {
    role: "user",
    aktif: true,
  },
};

let roleBaru = "superadmin";

function ubahRole(dataAdmin, roleBaru) {
  dataAdmin.role = roleBaru;
}

ubahRole(admin, roleBaru);
console.log(`${admin.nama} sekarang memiliki role ${admin.akses.role}`);

//Jawaban

let admin1 = {
  nama: "Rudi",
  akses: {
    role: "user",
    aktif: true,
  },
};

let roleBaru1 = "superadmin";

function ubahRole1(dataAdmin1, roleBaru1) {
  dataAdmin1.akses.role = roleBaru1;
}

ubahRole1(admin1, roleBaru1);
console.log(`${admin1.nama} sekarang memiliki role ${admin1.akses.role}`);

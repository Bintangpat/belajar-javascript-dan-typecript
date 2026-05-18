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

// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const refColor1 = [
    "Yellow", "Pink", "White", "Purple"
];
const refResto1 = [
    "Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"
]; 
let colorUser1 = new Set(refColor1);
let restauranUser1 = new Set(refResto1);
const refColor2 = [
    "Blue", "Black", "Grey"
];
const refResto2 = [
    "Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"
];
let colorUser2 = new Set(refColor2);
let restauranUser2 = new Set(refResto2);
const educationUser1 = [
    {name: "SD 01", city: "Jakarta", graduate: "2016"},
    {name: "SMP 02", city: "Jakarta", graduate: "2019"},
    {name: "SMA 03", city: "Tangerang"}
];
const educationUser2 = [
    {name: "SD 02", city: "Jakarta", graduate: "2010"},
    {name: "SMP 03", city: "Bogor", graduate: "2013"},
    {name: "SMA 01", city: "Surabaya", graduate: "2016"},
    {name: "Universitas Maju", city: "Tangerang"}
];
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: [...colorUser1],
    isHavePet: "Yes",
    education: educationUser1,
    favoriteRestaurant: [...restauranUser1],
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: [...colorUser2],
    isHavePet: "No",
    education: educationUser2,
    favoriteRestaurant: [...restauranUser2],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};

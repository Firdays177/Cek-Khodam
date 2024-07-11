alert("for fun ges");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("name").value;
  const khodam = generateKhodam(nama);

  if (nama == " ") {
    alert("Nama tidak boleh kosong");
    document.getElementById("name").value = "";
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p> ${nama} khodam kamu adalah ${khodam}</p>`;
    document.getElementById("name").value = "";
  }
});

function generateKhodam(nama) {
  const khodams = [
    "Upin",
    "Ranger merah",
    "Tuyul insaf",
    "Kakek merah",
    "Kambing ompong",
    "Gajah duduk",
    "Naga merah",
    "Keong emas",
    "Ipin",
    "Pocong slay",
    "Skibidi toilet",
    "Kai cenat mewing",
    "Zeus",
    "Kak gem salah paham",
    "Genderuwo cabul",
    "Kunti botak mata merah",
  ];
  const index = Math.floor(Math.random() * khodams.length);

  return khodams[index];
}

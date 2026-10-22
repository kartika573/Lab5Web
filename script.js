// script.js - Praktikum 5: JavaScript Dasar dan Manipulasi HTML

/* ===== Latihan 1: Menampilkan output ===== */
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

/* ===== Latihan 2: Alert dan prompt ===== */
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

/* ===== Latihan 3: Function dan operasi aritmetika ===== */
function operasiDasar(a, b) {
  const baris = [
    "Penjumlahan: " + (a + b),
    "Pengurangan: " + (a - b),
    "Perkalian: " + (a * b),
    "Pembagian: " + (b !== 0 ? a / b : "Tidak dapat dibagi nol"),
    "Modulus: " + (b !== 0 ? a % b : "Tidak dapat dibagi nol")
  ];
  baris.forEach((teks) => console.log(teks));
  const kotak = document.getElementById("hasilOperasi");
  kotak.classList.remove("salah");
  kotak.textContent = "a = " + a + ", b = " + b + "\n" + baris.join("\n");
}

function latihan3Bawaan() {
  operasiDasar(9, 4);
}
// Panggilan awal sesuai modul C.5 / E Latihan 3
operasiDasar(9, 4);

// Eksperimen mandiri no. 1: dua nilai dari prompt, dikonversi menjadi number
function latihan3Prompt() {
  const inputA = prompt("Masukkan bilangan pertama:");
  const inputB = prompt("Masukkan bilangan kedua:");
  const kotak = document.getElementById("hasilOperasi");
  if (inputA === null || inputB === null || inputA.trim() === "" || inputB.trim() === "" ||
      Number.isNaN(Number(inputA)) || Number.isNaN(Number(inputB))) {
    kotak.classList.add("salah");
    kotak.textContent = "Input tidak valid. Masukkan dua bilangan.";
    return;
  }
  operasiDasar(Number(inputA), Number(inputB));
}

/* ===== Latihan 4: if-else ===== */
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0-100):");
  const nilaiMahasiswa = Number(inputNilai);
  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

/* ===== Latihan 5: switch ===== */
function latihan5() {
  const inputPilihan = prompt("Masukkan angka 1-5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

/* ===== Latihan 6: Genap atau ganjil ===== */
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

/* ===== Latihan 7: Ubah warna latar ===== */
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

/* ===== Latihan 8: Checkbox menu makanan ===== */
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

/* ===== Eksperimen mandiri ===== */

// No. 2: tabel perkalian dengan perulangan for
function tabelPerkalian(angka) {
  let baris = "";
  for (let i = 1; i <= 10; i++) {
    baris += "<tr><td>" + angka + " x " + i + "</td><td>" + (angka * i) + "</td></tr>";
    console.log(angka + " x " + i + " = " + (angka * i));
  }
  document.getElementById("hasilTabel").innerHTML =
    "<table><thead><tr><th>Operasi</th><th>Hasil</th></tr></thead><tbody>" + baris + "</tbody></table>";
}

// No. 3: function yang mengembalikan true jika angka genap
function cekGenap(angka) {
  return angka % 2 === 0;
}

function uji_cekGenap() {
  const input = document.getElementById("inputGenap").value;
  const angka = Number(input);
  const kotak = document.getElementById("hasilGenap");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    kotak.className = "hasil salah";
    kotak.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  kotak.className = "hasil";
  kotak.textContent = "cekGenap(" + angka + ") mengembalikan " + cekGenap(angka);
}

// No. 4: validasi kolom tidak boleh kosong
function validasiKosong() {
  const nilai = document.getElementById("inputKota").value.trim();
  const kotak = document.getElementById("hasilKosong");
  if (nilai === "") {
    kotak.className = "hasil salah";
    kotak.textContent = "Kolom kota asal tidak boleh kosong.";
  } else {
    kotak.className = "hasil benar";
    kotak.textContent = "Data diterima: " + nilai;
  }
}

// No. 6: sembunyikan / tampilkan elemen
function toggleElemen() {
  const paragraf = document.getElementById("paragrafToggle");
  const tombol = document.getElementById("tombolToggle");
  const sedangTersembunyi = paragraf.style.display === "none";
  paragraf.style.display = sedangTersembunyi ? "block" : "none";
  tombol.textContent = sedangTersembunyi ? "Sembunyikan paragraf" : "Tampilkan paragraf";
}

/* ===== Tugas 7: validasi form nama dan nilai ===== */
function validasiForm() {
  const nama = document.getElementById("namaTugas").value.trim();
  const inputNilai = document.getElementById("nilaiTugas").value.trim();
  const nilai = Number(inputNilai);
  const kotak = document.getElementById("hasilTugas");
  const pesanError = [];

  if (nama === "") {
    pesanError.push("Nama tidak boleh kosong.");
  }
  if (inputNilai === "" || Number.isNaN(nilai)) {
    pesanError.push("Nilai harus diisi dengan angka.");
  } else if (nilai < 0 || nilai > 100) {
    pesanError.push("Nilai harus berada pada rentang 0 sampai 100.");
  }

  if (pesanError.length > 0) {
    kotak.className = "hasil salah";
    kotak.textContent = pesanError.join("\n");
  } else {
    kotak.className = "hasil benar";
    kotak.textContent = "Data valid. Nama: " + nama + ", nilai: " + nilai + ".";
  }
}

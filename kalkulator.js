// kalkulator.js - Mini Project: Kalkulator Nilai Mahasiswa

// --- Bagian perhitungan (tidak menyentuh tampilan) ---
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function tentukanStatus(nilai) {
  return nilai >= 60 ? "Lulus" : "Belum lulus";
}

// --- Bagian validasi ---
// Mengembalikan nilai number jika valid, atau null jika tidak valid
function bacaNilai(idInput, namaKomponen, daftarError) {
  const teks = document.getElementById(idInput).value.trim();
  const angka = Number(teks);
  if (teks === "" || Number.isNaN(angka)) {
    daftarError.push("Nilai " + namaKomponen + " harus diisi dengan angka.");
    return null;
  }
  if (angka < 0 || angka > 100) {
    daftarError.push("Nilai " + namaKomponen + " harus berada pada rentang 0 sampai 100.");
    return null;
  }
  return angka;
}

// --- Bagian tampilan ---
function tampilkanHasil() {
  const kotak = document.getElementById("hasilKalkulator");
  const daftarError = [];

  const tugas = bacaNilai("tugas", "tugas", daftarError);
  const uts = bacaNilai("uts", "UTS", daftarError);
  const uas = bacaNilai("uas", "UAS", daftarError);

  if (daftarError.length > 0) {
    kotak.className = "hasil salah";
    kotak.textContent = daftarError.join("\n");
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = tentukanStatus(akhir);

  console.log("Nilai akhir:", akhir.toFixed(2));
  console.log("Predikat:", predikat);
  console.log("Status:", status);

  kotak.className = akhir >= 60 ? "hasil benar" : "hasil salah";
  kotak.textContent =
    "Nilai akhir: " + akhir.toFixed(2) + "\n" +
    "Predikat: " + predikat + "\n" +
    "Status: " + status;
}

function resetForm() {
  ["tugas", "uts", "uas"].forEach((id) => { document.getElementById(id).value = ""; });
  const kotak = document.getElementById("hasilKalkulator");
  kotak.className = "hasil";
  kotak.textContent = "";
}

document.getElementById("tombolHitung").addEventListener("click", tampilkanHasil);
document.getElementById("tombolReset").addEventListener("click", resetForm);

document.querySelectorAll("button[data-tugas]").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    document.getElementById("tugas").value = tombol.dataset.tugas;
    document.getElementById("uts").value = tombol.dataset.uts;
    document.getElementById("uas").value = tombol.dataset.uas;
    tampilkanHasil();
  });
});

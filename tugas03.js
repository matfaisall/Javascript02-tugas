// const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
//   if (nilaiAwal > nilaiAkhir) {
//     return console.log("Nilai akhir harus lebih besar dari niali awal");
//   }

//   if (dataArray.length < 5) {
//     return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
//   }

//   filteredData = [];
//   for (let element of dataArray) {
//     if (nilaiAwal <= element <= nilaiAkhir) {
//       filteredData.push(element);
//     }
//   }

//   filteredData.sort();

//   for (let element of filteredData) {
//     console.log(element);
//   }
// };

// seleksiNilai(3, 15, [2, 25, 4, 14, 17, 30, 8]);

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal >= nilaiAkhir) {
    return "NilaiAwal harus lebih kecil dari nilaiAkhir.";
  }
  if (dataArray.length <= 5) {
    return "Jumlah data dalam dataArray harus lebih dari 5.";
  }

  const hasilSeleksi = dataArray.filter(
    (data) => nilaiAwal < data && data < nilaiAkhir
  );

  if (hasilSeleksi.length === 0) {
    return "Hasil tidak ditemukan";
  }

  hasilSeleksi.sort((a, b) => a - b);
  return hasilSeleksi;
};

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(seleksiNilai(5, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));

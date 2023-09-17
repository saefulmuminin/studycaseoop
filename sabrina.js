class BangunDatar {
  constructor(nama) {
    this.nama = nama;
  }

  // Metode untuk menghitung luas
  hitungLuas() {
    return;
  }

  // Metode untuk menghitung keliling
  hitungKeliling() {
    return;
  }
}

class Persegi extends BangunDatar {
  constructor(sisi) {
    super("Persegi");
    this.sisi = sisi;
  }

  hitungLuas() {
    return this.sisi * this.sisi;
  }

  hitungKeliling() {
    return 4 * this.sisi;
  }
}

class PersegiPanjang extends BangunDatar {
  constructor(panjang, lebar) {
    super("Persegi Panjang");
    this.panjang = panjang;
    this.lebar = lebar;
  }

  hitungLuas() {
    return this.panjang * this.lebar;
  }

  hitungKeliling() {
    return 2 * (this.panjang + this.lebar);
  }
}

class Lingkaran extends BangunDatar {
  constructor(jariJari) {
    super("Lingkaran");
    this.jariJari = jariJari;
  }

  hitungLuas() {
    return Math.PI * this.jariJari * this.jariJari;
  }

  hitungKeliling() {
    return 2 * Math.PI * this.jariJari;
  }
}

class Segitiga extends BangunDatar {
  constructor(alas, tinggi, sisi1, sisi2, sisi3) {
    super("Segitiga");
    this.alas = alas;
    this.tinggi = tinggi;
    this.sisi1 = sisi1;
    this.sisi2 = sisi2;
    this.sisi3 = sisi3;
  }

  hitungLuas() {
    return (this.alas * this.tinggi) / 2;
  }

  hitungKeliling() {
    return this.sisi1 + this.sisi2 + this.sisi3;
  }
}

class Trapesium extends BangunDatar {
  constructor(sisiAtas, sisiBawah, tinggi, sisiKanan, sisiKiri) {
    super("Trapesium");
    this.sisiAtas = sisiAtas;
    this.sisiBawah = sisiBawah;
    this.tinggi = tinggi;
    this.sisiKanan = sisiKanan;
    this.sisiKiri = sisiKiri;
  }

  hitungLuas() {
    return ((this.sisiAtas + this.sisiBawah) * this.tinggi) / 2;
  }

  hitungKeliling() {
    return this.sisiAtas + this.sisiBawah + this.sisiKanan + this.sisiKiri;
  }
}

// Contoh penggunaan
const persegi = new Persegi(5);
const persegiPanjang = new PersegiPanjang(4, 6);
const lingkaran = new Lingkaran(3);
const segitiga = new Segitiga(4, 5, 3, 4, 5);
const trapesium = new Trapesium(4, 8, 5, 5, 6);

console.log(
  `${
    persegi.nama
  }: Luas = ${persegi.hitungLuas()}, Keliling = ${persegi.hitungKeliling()}`
);
console.log(
  `${
    persegiPanjang.nama
  }: Luas = ${persegiPanjang.hitungLuas()}, Keliling = ${persegiPanjang.hitungKeliling()}`
);
console.log(
  `${
    lingkaran.nama
  }: Luas = ${lingkaran.hitungLuas()}, Keliling = ${lingkaran.hitungKeliling()}`
);
console.log(
  `${
    segitiga.nama
  }: Luas = ${segitiga.hitungLuas()}, Keliling = ${segitiga.hitungKeliling()}`
);
console.log(
  `${
    trapesium.nama
  }: Luas = ${trapesium.hitungLuas()}, Keliling = ${trapesium.hitungKeliling()}`
);

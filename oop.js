class BangunDatar {
  constructor(nama) {
    this.nama = nama;
  }

  namaBangunDatar() {
    return "Bangun Datar: " + this.nama;
  }

  hitungLuas() {}

  hitungKeliling() {}
}

class Persegi extends BangunDatar {
  constructor(sisi) {
    super("persegi");
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
    super("persegi Panjang: ");
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

const persegi1 = new Persegi(5);
const persegiPanjang1 = new PersegiPanjang(5, 3);
const lingkaran1 = new Lingkaran(7);

console.log(persegi1.namaBangunDatar());
console.log("Luas:", persegi1.hitungLuas());
console.log("Keliling:", persegi1.hitungKeliling());

console.log(persegiPanjang1.namaBangunDatar());
console.log("Luas:", persegiPanjang1.hitungLuas());
console.log("Keliling:", persegiPanjang1.hitungKeliling());

console.log(lingkaran1.namaBangunDatar());
console.log("Luas:", lingkaran1.hitungLuas());
console.log("Keliling:", lingkaran1.hitungKeliling());

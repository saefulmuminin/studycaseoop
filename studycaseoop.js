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
    constructor(sisi, nama) {
      super(nama);
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
    constructor(panjang, lebar, nama) {
      super(nama);
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
    constructor(jariJari, nama) {
      super(nama);
      this.jariJari = jariJari;
    }
  
    hitungLuas() {
      return Math.PI * this.jariJari * this.jariJari;
    }
  
    hitungKeliling() {
      return 2 * Math.PI * this.jariJari;
    }
  }
  
  class Trapesium extends BangunDatar {
    constructor(sisiAtas, sisiBawah, tinggi, sisiKanan, sisiKiri, nama) {
      super(nama);
      this.sisiAtas = sisiAtas;
      this.sisiBawah = sisiBawah;
      this.tinggi = tinggi;
      this.sisiKanan = sisiKanan;
      this.sisiKiri = sisiKiri;
    }
  
    hitungLuas() {
      return 0.5 * (this.sisiAtas + this.sisiBawah) * this.tinggi;
    }
  
    hitungKeliling() {
      return this.sisiAtas + this.sisiBawah + this.sisiKanan + this.sisiKiri;
    }
  }
  
  class Segitiga extends BangunDatar {
    constructor(alas, tinggi, sisiA, sisiB, sisiC, nama) {
      super(nama);
      this.alas = alas;
      this.tinggi = tinggi;
      this.sisiA = sisiA;
      this.sisiB = sisiB;
      this.sisiC = sisiC;
    }
  
    hitungLuas() {
      return 0.5 * this.alas * this.tinggi;
    }
  
    hitungKeliling() {
      return this.sisiA + this.sisiB + this.sisiC;
    }
  }
  
  const persegi1 = new Persegi(5, "persegi");
  const persegiPanjang1 = new PersegiPanjang(5, 3, "persegi panjang");
  const lingkaran1 = new Lingkaran(7, "lingkaran");
  const trapesium1 = new Trapesium(6, 10, 4, 7, 8, "trapesium");
  const segitiga1 = new Segitiga(6, 4, 5, 5, 7, "sehitiga");
  
  console.log(persegi1.namaBangunDatar());
  console.log("Luas:", persegi1.hitungLuas());
  console.log("Keliling:", persegi1.hitungKeliling());
  console.log("");
  console.log(persegiPanjang1.namaBangunDatar());
  console.log("Luas:", persegiPanjang1.hitungLuas());
  console.log("Keliling:", persegiPanjang1.hitungKeliling());
  console.log("");
  console.log(lingkaran1.namaBangunDatar());
  console.log("Luas:", lingkaran1.hitungLuas());
  console.log("Keliling:", lingkaran1.hitungKeliling());
  console.log("");
  console.log(trapesium1.namaBangunDatar());
  console.log("Luas:", lingkaran1.hitungLuas());
  console.log("Keliling:", lingkaran1.hitungKeliling());
  console.log("");
  console.log(segitiga1.namaBangunDatar());
  console.log("Luas:", lingkaran1.hitungLuas());
  console.log("Keliling:", lingkaran1.hitungKeliling());
  
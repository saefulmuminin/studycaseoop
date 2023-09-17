class Persegi {
    constructor(sisi) {
      this.sisi = sisi;
    }
  
    hitungLuas() {
      return this.sisi * this.sisi;
    }
  
    hitungKeliling() {
      return 4 * this.sisi;
    }
  }
  class PersegiPanjang {
    constructor(panjang, lebar) {
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
  class Lingkaran {
    constructor(jariJari) {
      this.jariJari = jariJari;
    }
  
    hitungLuas() {
      return Math.PI * Math.pow(this.jariJari, 2);
    }
  
    hitungKeliling() {
      return 2 * Math.PI * this.jariJari;
    }
  }
  class Segitiga {
    constructor(alas, tinggi) {
      this.alas = alas;
      this.tinggi = tinggi;
    }
  
    hitungLuas() {
      return 0.5 * this.alas * this.tinggi;
    }
  
    // Untuk menghitung keliling segitiga, Anda perlu mengetahui panjang ketiga sisi,
    // karena sisi segitiga bisa bervariasi.
    // Jadi, method hitungKeliling() sebaiknya membutuhkan parameter tambahan.
    hitungKeliling(sisi1, sisi2, sisi3) {
      return sisi1 + sisi2 + sisi3;
    }
  }
  class Trapesium {
    constructor(sisiAtas, sisiBawah, tinggi, sisiMiring) {
      this.sisiAtas = sisiAtas;
      this.sisiBawah = sisiBawah;
      this.tinggi = tinggi;
      this.sisiMiring = sisiMiring;
    }
  
    hitungLuas() {
      return ((this.sisiAtas + this.sisiBawah) / 2) * this.tinggi;
    }
  
    // Untuk menghitung keliling trapesium, Anda perlu mengetahui panjang keempat sisi.
    // Jadi, method hitungKeliling() sebaiknya membutuhkan parameter tambahan.
    hitungKeliling(sisi1, sisi2, sisi3, sisi4) {
      return sisi1 + sisi2 + sisi3 + sisi4;
    }
  }
    
      
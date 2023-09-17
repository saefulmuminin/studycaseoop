 
// Import library readline
const readline = require('readline');

// Fungsi untuk mengambil input dari pengguna melalui command line (Node.js)
function getInput(prompt, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(prompt, (input) => {
        rl.close();
        callback(parseFloat(input));
    });
}

// Kelas untuk bangun datar persegi
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

// Kelas untuk bangun datar persegi panjang
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

// Kelas untuk bangun datar lingkaran
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

// Kelas untuk bangun datar segitiga
class Segitiga {
    constructor(alas, tinggi, sisiA, sisiB, sisiC) {
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

// Kelas untuk bangun datar trapesium
class Trapesium {
    constructor(sisiAtas, sisiBawah, tinggi, sisiMiring1, sisiMiring2) {
        this.sisiAtas = sisiAtas;
        this.sisiBawah = sisiBawah;
        this.tinggi = tinggi;
        this.sisiMiring1 = sisiMiring1;
        this.sisiMiring2 = sisiMiring2;
    }

    hitungLuas() {
        return 0.5 * (this.sisiAtas + this.sisiBawah) * this.tinggi;
    }

    hitungKeliling() {
        return this.sisiAtas + this.sisiBawah + this.sisiMiring1 + this.sisiMiring2;
    }
}

// Fungsi untuk menghitung dan menampilkan hasil
function hitungDanTampilkanHasil(bangunDatar) {
    const luas = bangunDatar.hitungLuas();
    const keliling = bangunDatar.hitungKeliling();

    console.log(`Luas: ${luas}`);
    console.log(`Keliling: ${keliling}`);
}

// Pilihan bangun datar
console.log('Pilih bangun datar:');
console.log('1. Persegi');
console.log('2. Persegi Panjang');
console.log('3. Lingkaran');
console.log('4. Segitiga');
console.log('5. Trapesium');

getInput('Masukkan pilihan Anda: ', (pilihan) => {
    switch (pilihan) {
        case 1:
            getInput('Masukkan panjang sisi persegi: ', (sisi) => {
                const persegi = new Persegi(sisi);
                hitungDanTampilkanHasil(persegi);
            });
            break;
        case 2:
            getInput('Masukkan panjang persegi panjang: ', (panjang) => {
                getInput('Masukkan lebar persegi panjang: ', (lebar) => {
                    const persegiPanjang = new PersegiPanjang(panjang, lebar);
                    hitungDanTampilkanHasil(persegiPanjang);
                });
            });
            break;
        case 3:
            getInput('Masukkan jari-jari lingkaran: ', (jariJari) => {
                const lingkaran = new Lingkaran(jariJari);
                hitungDanTampilkanHasil(lingkaran);
            });
            break;
        case 4:
            getInput('Masukkan panjang alas segitiga: ', (alas) => {
                getInput('Masukkan tinggi segitiga: ', (tinggi) => {
                    getInput('Masukkan panjang sisi A segitiga: ', (sisiA) => {
                        getInput('Masukkan panjang sisi B segitiga: ', (sisiB) => {
                            getInput('Masukkan panjang sisi C segitiga: ', (sisiC) => {
                                const segitiga = new Segitiga(alas, tinggi, sisiA, sisiB, sisiC);
                                hitungDanTampilkanHasil(segitiga);
                            });
                        });
                    });
                });
            });
            break;
        case 5:
            getInput('Masukkan panjang sisi atas trapesium: ', (sisiAtas) => {
                getInput('Masukkan panjang sisi bawah trapesium: ', (sisiBawah) => {
                    getInput('Masukkan tinggi trapesium: ', (tinggi) => {
                        getInput('Masukkan panjang sisi miring 1 trapesium: ', (sisiMiring1) => {
                            getInput('Masukkan panjang sisi miring 2 trapesium: ', (sisiMiring2) => {
                                const trapesium = new Trapesium(sisiAtas, sisiBawah, tinggi, sisiMiring1, sisiMiring2);
                                hitungDanTampilkanHasil(trapesium);
                            });
                        });
                    });
                });
            });
            break;
        default:
            console.log('Pilihan tidak valid.');
    }
});

class BangunDatar {
    constructor() {
        this.pi = 3.14
    }

    luasPersegi(sisi){
        return sisi * sisi
    }

    luasPersegiPanjang(panjang, lebar) {
        return panjang * lebar
    }

    luasLingkaran(jariJari) {
        return this.pi * jariJari * jariJari
    }

    luasSegitiga(alas, tinggi) {
        return 1/2 * (alas * tinggi)
    }

    luasTrapesium(a, b, tinggi) {
        return 1/2 * (a + b) * tinggi
    }
}

const persegi = new BangunDatar()
const segitiga = new BangunDatar()
const lingkaran = new BangunDatar()
const trapesium = new BangunDatar()
const persegiPanjang = new BangunDatar()

// LUAS PERSEGI
console.log(`Luas Persegi: ${persegi.luasPersegi(9)}`)

// LUAS PERSEGI PANJANG
console.log(`Luas Persegi Panjang: ${persegiPanjang.luasPersegiPanjang(12, 5)}`)

// LUAS  SEGITIGA

// LUAS TRAPESIUM
console.log(`Luas Trapesium: ${trapesium.luasTrapesium(12,8,7)}`)

// LUAS Lingkaran
console.log(`Luas Lingkaran: ${lingkaran.luasLingkaran(21)}`)


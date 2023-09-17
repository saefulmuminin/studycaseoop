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
console.log(persegi.luasPersegi(9))
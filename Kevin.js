class Trapesium {
    constructor(tinggi, sisiSejajarA, sisiSejajarB) {
        this.tinggi = tinggi
        this.sisiSejajarA = sisiSejajarA
        this.sisiSejajarB = sisiSejajarB
    }

    hitungLuas() {
        return 1/2 * (this.sisiSejajarA + this.sisiSejajarB) * this.tinggi
    }
}
class PersegiPanjang
{
    constructor(panjang, lebar) {
        this.panjang = panjang
        this.lebar = lebar
    }

    hitungLuas() {
        return this.panjang * this.lebar
    }
}

class Lingkaran {
    constructor(jariJari) {
        this.jariJari = jariJari
        this.pi = Math.PI
    }

    hitungLuas()
    {
        return this.pi * this.jariJari * this.jariJari
    }
}

class Segitiga {
    constructor(tinggi, alas) {
        this.tinggi = tinggi
        this.alas = alas
    }

    hitungLuas() {
        return 1/2 * (this.alas * this.tinggi)
    }
}

class Persegi {
    constructor(sisi) {
        this.sisi = sisi
    }

    hitungLuas() {
        return this.sisi * this.sisi
    }
}

const persegi = new Persegi(9)
const segitiga = new Segitiga(9,4)
const lingkaran = new Lingkaran(21)
const trapesium = new Trapesium(12, 8, 7)
const persegiPanjang = new PersegiPanjang(12, 5)

// LUAS PERSEGI
console.log(`Luas Persegi: ${persegi.hitungLuas()}`)

// LUAS PERSEGI PANJANG
console.log(`Luas Persegi Panjang: ${persegiPanjang.hitungLuas()}`)

// LUAS  SEGITIGA
console.log(`Luas Segitiga: ${segitiga.hitungLuas()}`)

// LUAS TRAPESIUM
console.log(`Luas Trapesium: ${trapesium.hitungLuas()}`)

// LUAS Lingkaran
console.log(`Luas Lingkaran: ${lingkaran.hitungLuas()}`)




//Normal JS
function selamVer(isim){
    return "Merhaba "+isim;
}
//tip fark etmeden string,int,array olarak değer verilebiliyor->js buna izin veriyor
// let mesaj = selamVer("Murat")
let mesaj = selamVer(2)


//TypeScript Kullanımı
function selamVerTS(isim:string){
    return "Merhaba "+isim;
}
let mesajTS = selamVer("Murat")//Farklı bir türden değer verilemiyor, tanımlanan türe göre verilebiliyor
//TSC: typescirt compiler ile compile ederek js çıktısını dosya olarak görebiliriz.

//Nodemon
// paketler kayıt olduğu zaman izler, js dosyasında değişiklik olunca paketi izleyip onu tekrardan çalıştırması gerekiyorsa çalıştırır
//kaydet tuşuna basınca paket çalışır.
// tsc intro.ts ile js dosyası oluşturulur
//nodemon intro.js ile ilgili dosya çalıştırılır ve değşiklik olduğunda sonucu gözlemlenir.

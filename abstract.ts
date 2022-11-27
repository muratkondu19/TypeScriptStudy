//ABSTRACT CLASS
//abstract classlar birer classtır fakat tek başlarına anlam ifade etmezler.
//inheritance yöntemiyle kullanılabilirler
//bütün bankalar kredi verebilir, krediyi kaydetmek ortak bir iştir
//kredi hesaplarken hesaplama işlemleri farklılık gösterebilmektedir. 
//hesaplama işlemi değişkenken kaydetme işleminin ortak olması senaryosunda abstract sınıf kullanılabilir
//ortak ve ortak olmayan operasyonları belirlemek için

abstract class KrediBase {
    //base ifadesi temel/ana sınıflar için kullanılır
    constructor() {

    }
    //bütün sınıflarda ortak olacak 
    //tamamlanmış operasyon - içi dolu ve ortak
    kaydet(): void {
        console.log("Kaydedildi");
    }

    //her yerde ortak değil
    abstract hesapla(): void;
}

class TuketiciKredisi extends KrediBase {
    constructor() {
        //constructor parametresiz gönderildiği için super kullanılmalıdır
        //string bir parametre olsaydı super("param") şeklinde olacaktı
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisi hesaplandı");

    }
}


class KonutKredisi extends KrediBase {
    constructor() {
        super();
    }
    hesapla(): void {
        console.log("Konut kredisi hesaplandı");

    }
    //sınıf özelinde operasyon tanımmlanabilir
    sigortaHesapla() {
        console.log("Sigorta hesaplandı");
    }
}

let tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

//kredi değeri parametre olarak kullanılacaksa bu parametrenin çalışma şekli aşağıdaki gibi tanımlanabilir
let kredi : KrediBase
kredi = new TuketiciKredisi()

kredi = new KonutKredisi()
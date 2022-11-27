//CLASS - NESNE
//Nesnelerin hem özellikleri hemde operasyonları/yapılacak işleri barındıran yapılardır.

class Ev {
    _odaSayisi: number;
    _pencereSayisi: number;
    _kat: number;

    //constructor / yapıcı blok -> classlar referans tiplerdir.(arrayler gibi)
    //bir class yaratmak için ondan bir instance(örnek) üretmek gerekir (new)
    //instance yapıldığında çalışacak olan blok constructor bloğudur
    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this._odaSayisi = odaSayisi; //parametredeki değerleri alma / set 
        this._pencereSayisi = pencereSayisi
        this._kat = kat;
        //değerleri private yapmadan da kullanabiliriz
    };

    evOzellikleri() {
        console.log(this._kat + 'kat ' + this._odaSayisi + 'oda sayısı ' + this._pencereSayisi + ' pencere sayısı vardır.');
    }
}

//class kullanımı
let ev = new Ev(3, 4, 5)
console.log(ev._kat);
ev.evOzellikleri();

//INHERITANCE - MİRAS
//Nesnelerin ortak özelliklerini birbirinin yerine kullanılması / tekrarlanmaması
//classlar referans tip olduklarından birbirlerinin referans numaralarını tutabilmektedirler.
//kişi ve müşteri sınıflarında müşteri kişiyi miras alabilir, müşteri bir kişidir.

class Kisi {
    private isim: string;
    protected yas: number;
    public soyisim: string;
    kaydet() {
        console.log("Kişi kaydedildi")
    }
}

class Musteri extends Kisi {
    satisYap() {
        console.log("Satış yapıldı")
    }
}

class Personel extends Kisi {
    maasOde() {
        this.yas; //protected olduğundan erişilebilmektedir.
        console.log("Maaş ödendi")
    }
}

let musteri = new Musteri();
musteri.kaydet(); //kalıtım olarak aldığı fonksiyonu kullanabilir

let personel = new Personel();
personel.maasOde();
personel.kaydet();
personel.soyisim; //public olduğu için kullanılabilir

//PROVATE - PROTECTED - PUBLIC
//Class özelliklerine erişebilmemizin nedeni özelliklerinde public erişim bildirgecinin default olarak tanımlı olmaısıdır.
//private sadece tanımlandığı class içerisinde geçerlidir.
//protected private ile ilgili herşey geçerlidir, tanımlı olduğu class içeriinde geçerlidir fakat inheritance olan class içerisinde this ile erişilebilir.
//public-> her yerden erişilebilir


//GETER SETTER - PROPERTY - Encapsulation - Kapsülleme
class KisiGS {
    private _isim: string;

    //get - değer okuma
    get isim() {
        //set edilen veriyi okurken farklı bir formatta değer dönebiliyoruz -> kapsülleme
        return "Sayın" +this._isim;
    }
    //set - değer atama
    set isim(ad: string) { 
        this._isim = ad;
    }
}

let kisiGS = new KisiGS();
kisiGS.isim="Murat"; //set
kisiGS.isim; //get

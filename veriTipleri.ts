//number
//sayısal ifadeler number olarak tutulmaktadır.
let sayi: number
sayi = 10
sayi = 10.4

//string
//metinsel ifadeler string olarak tutulmaktadır.
let sehir: string
let mesaj:string ="Mesaj içeriği" //direkt olarak tipe uygun atama yapılabilir.
sehir="İzmir"

//boolean
//mantıksal ifadeler boolean olarak tutulmaktadır.
let dogruMu:boolean
dogruMu=true
dogruMu=false

//array / diziler / referans tip
let sayilar:number[] =[1,2,3] //sayiler number arraydir.
let sayilar2:Array<number> =[1,2,3] // gemer,c olarak kullanımı
let dizi:[number,string]=[2,"Ankara"] //tuple olarak kullanımı
    dizi[0] //->2
    dizi[1] //->"Ankara"

//enum
enum Renk{Kirmizi=1,Siyah=2,Mavi=3}
//enum olarak tanımlı değerin karşılığı değiştiğinde projede kullanılan her yerde de değişecektir.
let renk:Renk=Renk.Kirmizi //enuma ulaşma ve başlangıç değerini okuma

//any
//herhangi anlamındadır.
//gelecek olan datanın veri tipinden emin olunmadığında kullanılır
let deger:any="Ankara"
deger=2 //farklı bir tipte değer verilebilir, tip önemsiz
deger ={} //tüm veri tiplerini kullanabiliriz

//void
//genellikle fonksiyonlarda kullanılır
//herhangi bir dönüş değeri yoksa kullanılabilir
let deger2:void=undefined //karşılığı olmuyor

function selamVerUF():void{
    console.log("merhaba")
   //void olduğu için return kullanılmaz
   //sadece bir işlem yerine getirilip değer dönüşü yoksa kullanılabilir
}

//undefined
let yas:number; //şuan undefined->bir değer atanmadı
yas=10 //undefined değil, değer atandı

//null
// referans tiplerde kullanılır, referansı oluşmadı anlamındadır
class Musteri{
    // new yapılmaz ise bu null'dır, refernası oluşmamıştır.
}
//GENERICS
//Tekrarlayarak yazmayı önler ve tip güvenliği sağlar

function deger(x: number): number {
    return x;
}
let sayi = deger(10)
console.log(sayi);


//ilgili fonksiyonda farklı bir değer türüyle de çalışmak istenirse 
function degerS(x: string): string {
    return x;
}
let sehir = degerS("Ankara")
console.log(sehir);


//genericler ile bu durum kontrol altına alınabilir
function generic<T>(x: T): T {
    return x;
}
let sayiG=  generic<number>(10) //çalışılacak tip belirlenir ve değer atanır
let sehirG = generic<string>("İzmir") //generic tip string olarak tanımlanıp ataması yapıldı

//GENERIC SINIFLARLA ÇALIŞMAK
class GerericClass<T>{
    degisken:T;
    fonksyion(param:T):T{
        return param;
    }
}

let sinif = new GerericClass<number>()
sinif.degisken=10;
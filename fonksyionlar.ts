//JS Fonksyionlar
function topla(x, y) {
    //x ve y herhangi bir türde olabilir
    return x + y;
}

//TS Fonksyionlar
function toplaTS(x: number, y: number): number {
    //x'in türü number, y'in türü number olmalı ve fonkiyon bir number dönmelidir.
    return x + y;
}
toplaTS(10, 5)


//ANONİM FONKSİYON
let toplaTS1 = function (x: number, y: number): number {
    return x + y;
}
console.log(toplaTS1(2, 4))

//OPTIONAL VE DEFAULT PARAMETRELER
//default değer için ->y:number=5
function defaultF(x: number, y: number = 5): number {
    return x + y;
}
console.log(defaultF(10))//y için default değeri alır
console.log(defaultF(10, 9)) //y için default yerine atanan değeri alır


function optional(x: number, y?: number): number {
    //optional parametreler sonda olmalıdır, kullanıcı değer verdiğinde ilk değere atanır
    //y? -> y undefined durumundadır bu sebeple
    if (y) {
        //y tanımlı ise
        return x + y;
    }
    return x;
}
console.log(optional(10))//y undefined olduğundan sonuç NaN döner bu sebeple if kontrolü ile sadece x döndürüldü
console.log(optional(10, 9)) // y tanımlı olduğu için x+y döner

//REST PARAMETRELER
//alacağımız parametre sayısı belli değilse rest parametrelerden yararlanılır
function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
    return ilkDavetli + " " + digerleri.join(" ")
}
console.log(davetEt("Murat","Ali","Ayşe"));//deger alabilir,kısıt yok

function davetEt2(...digerleri: string[]): string {
    //ilk değer default olarak verilme zorunluluğu yoktur
    //kullanıcıyı yönlendirmek için ilk değer örnek olarak istenebilir,okunabilirlik açısından
    return digerleri.join(" ")
}console.log(davetEt2("Murat","Ali","Ayşe"));

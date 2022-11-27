//INTERFACE
//abstract sınıflar tamamlanmış ve tamamlanmamış operasyonlar içerir
//interfaceler abstract sınıflardan farklı olarak operasyon seviyesinde tamamlanmamış imzalar barındır.

//interface ile metodun parametrelerine ekleme yapıldığı zaman bu metod parametrelerini bir interface olarak veriyoruz ve kullanıcının ona uyması sağlanır.

interface Product {
    id: number;
    name: string;
    unitPrice: number;
    
}

function save(product: Product) {
    console.log(product.name + 'kaydedidili.');
}
//interface kullanıldığı için kullanıcıdan tüm özellikleri tanımlaması isteniyor.
save({ id: 1, name: 'Laptop', unitPrice: 5000 })


//class ile karşılaştırma
class Product2 {
    id: number;
    name: string;
    unitPrice: number;
}

function save2(product2: Product2) {
    console.log("Kaydedildi");
}

let mouse = new Product2()
mouse.name = "HP"
//diğer değerleri vermeyebilir ve herhangi bir zorunluluk yoktur.
save2(mouse) //tüm değerlerin verilmesi zorunlu değilse class, zorunluluk var ise interface


interface PersonService {
    //interfaceler tamamlanmamış operasyonlar barındırabiliyor
    save(); //implemente eden save barındırmak zorundadır.
}

class CustomerService implements PersonService{
    //save metodu zorunlu olarak implemente edilir
    save() {
        throw new Error("Method not implemented.");
    }
}
// number veri türü

let price = 100
let taxPercentage = 0.18
let taxFee = price * taxPercentage
let total = price + taxFee
//hepsini böyle yazmak yerine tek satırda ya<abiliriz
console.log("fiyat" + " " + price);
console.log("vergi yüzdesi" + " "+ taxPercentage);
console.log("vergi ücreti " + taxFee);
console.log("Toplam fiyat" + total);

console.log(
    "fiyat:", price,
    "vergi yüzdesi:", taxPercentage,
    "vergi ücreti:", taxFee,
    "toplam fiyat:", total
);

let stringNumber = "11.5"
console.log(stringNumber);
//Number constructer ı stringi number a çevirir
let newNumber = Number(stringNumber)
console.log(newNumber);
//arttırma azaltma işlemleri
let counter = 320
counter = counter + 1
console.log(counter);

counter += 5; //bu kullanım daha okunaklı 
console.log(counter);

counter--;
console.log(counter);
counter++;
console.log(counter);

counter *= 10;
console.log(counter);

counter /=2;
console.log(counter);

console.log( 2+3 * 5 );
console.log( (2+3) *5 );

//modunu alma ( sayı tek mi çift mi)
console.log(10 % 2); // çıkan sonuç 0 ise çifttir
console.log(9 % 2); // çıkan sonuç 1 ise tektir

//19 ürün 8 ürün alan koliye tüm ürünler sıgıyor mu

console.log(8%8);
console.log(19%8); // 3 ürün dışarıda kalıyor

//üs alma

console.log(3**2);

//asagı  yuvarlama
console.log(Math.floor(1.6)); //1
//yukarı yuvarlama
console.log(Math.ceil(1.6)); //2
//yakına yuvarlama 
console.log(Math.round(1.6)); //2
// 0.5 > ve sonrası üste yuvarlanır
console.log(Math.round(1.49)); //1
console.log(Math.round(1.5)); //2



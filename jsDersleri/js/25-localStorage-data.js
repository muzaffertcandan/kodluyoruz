//local storage işlemleri

//complex yapılar kuruyorsak stringify gerekli(metinsel ifadeye çevirmek)
let user = {userName : "muzaffer CANDAN", isActive: true}
console.log(user);
// JSON.stringify() genellikle web sunucusuna veri alırken yada yollarken
//kullanılır
localStorage.setItem('userInfo', JSON.stringify(user))

// Local storage a kaydedilen veriye erişmek için parse gerekli
// JSON şeklinde görmek için String den parse etmek gerekiyor
let userInfo = localStorage.getItem('userInfo') //bilgiyi al
console.log(userInfo); //burda string şeklinde
userInfo = JSON.parse(userInfo) //burda JSON a dönüştürüyoruz
console.log(userInfo);
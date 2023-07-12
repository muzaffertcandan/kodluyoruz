let user1 = {
    firstName: "Muzaffer",
    lastName: "Candan",
    score: [1,2,3,4],
    isActive: true,
    //key bilgisi içersinde fonksiyon da tanımlanabilir
    shortName: function(){return `${this.firstName[0].toUpperCase()} ${this.lastName}.`},
}
console.log(user1.score);
//key içinde olan fonksiyon yine fonksyion şeklinde çağılır
console.log(user1.shortName());

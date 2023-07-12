let settings = {
  userName: "muzaffer",
  password: "zorsifre",
  isActive: false,
  ip: "111.111.111",
  serverName: "bestServerTr.com",
};

// obje içerisindeki bilgilerin tek seferde çıkarılması
// let userName = settings.serverName
// console.log(userName);

//rename ve destracturing
let { userName: user, isActive, password, ip: serverIp, serverName } = settings;
console.log(user, password, serverName);
console.log(user);

// obje içerisindeki bazı bilgilerin tek seferde çıkarılması
let { userName: userName2, isActive: isActive2, password: password2, ...newSettings } = settings;
// eger degisken ismi daha önce tanimlanmadiysa
// let { userName, isActive, password, ...newSettings } = settings;
console.log(userName2, isActive2, newSettings);

// object in destructuring ile kopyalanması
//BUNLAR HATALI
// let settings2 = settings

//BU DOĞRU
let settings2 = {...settings}
settings2.userName = "degisen bilgi"
console.log("settings", settings);
console.log("settings2", settings2);

let score = [100, 200, 300, 400]
let [score1, score2, ...newScore] = score
console.log(score1 , score2 , newScore);


// object kopyalama ile aynı  let settings2 = {...settings}
let myScore = [...score]
console.log(myScore);
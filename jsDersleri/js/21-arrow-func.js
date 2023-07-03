function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}

const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};

// hello("javascript")

helloFuncV1("hellofuncV1");

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`); //bir işlem var süslü parantez gerekli değil
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName, lastName) => {
  console.log(`Merhaba ${firstName} ${lastName}`);
};

helloFuncV3("helloFuncV3", "lastName info");

// birden fazla işlemde süslü parantez gerekli
const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
  return firstName, lastName;
};
helloFuncV4("V4", "deneme")


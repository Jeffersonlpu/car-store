const enviarEmail = require("./envia-email");

let emailClients = [
  {
    firstName: "Lucas",
    email: "lucas@email.com",
    receiveMarketing: true,
  },
  {
    firstName: "Bianca",
    email: "bianca@email.com",
    receiveMarketing: true,
  },
  {
    firstName: "Júlia",
    email: "julia@email.com",
    receiveMarketing: false,
  },
];

let subject = "Feirão Semanal - CarStore";

let carBase = [
  {
    brand: "Renault",
    model: "Sandero",
    newVehicles: 8,
    usedCars: 48,
    bestSellers: false,
  },
  {
    brand: "Volkswagen",
    model: "Gol",
    newVehicles: 35,
    usedCars: 120,
    bestSellers: true,
  },
  {
    brand: "Fiat",
    model: "Uno",
    newVehicles: 20,
    usedCars: 90,
    bestSellers: false,
  },
  {
    brand: "Chevrolet",
    model: "Onix",
    newVehicles: 5,
    usedCars: 73,
    bestSellers: false,
  },
];

const getDayOfWeek = (date = new Date()) => {
  return date.getDay();
};

let totalNewVehicles = carBase.reduce((acc, car) => acc + car.newVehicles, 0);

let totalUsedCars = carBase.reduce((acc, car) => acc + car.usedCars, 0);

let promoBrand = carBase[1].brand;

const bestSellersModel = carBase
  .filter((car) => car.bestSellers)
  .map((car) => car.model);

const bodyEmail = ({ firstName }) => {
  return `
    Olá, ${firstName}!

    Aproveite a grande promoção da semana!
    Todos os veículos da ${promoBrand} com 10% off!
    Nossa frota conta com ${totalNewVehicles} carros novos e ${totalUsedCars} carros semi-novos neste mês.
    Lembramos que o ${bestSellersModel} foi o carro mais vendido da semana. 
    `;
};

if (getDayOfWeek === 1) {
  emailClients.forEach(({ firstName, receiveMarketing, email }) => {
    if (receiveMarketing) {
      console.log(
        enviarEmail({
          email,
          subject,
          bodyEmail: bodyEmail({
            firstName,
          }),
        })
      );
    } else {
      console.log(`
        ${email} optou por não receber comunicações`);
    }
  });
} else {
  console.log("Hoje não é segunda-feira!");
}
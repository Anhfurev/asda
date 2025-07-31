// hi lalalalala
let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
    photo: "prius.png",
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
    photo: "civic.png",
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
    photo: "tesla.png",
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
    photo: "ford ranger.png",
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
    photo: "sonata.png",
  },
  {
    model: "Lamborghini huracan",
    type: "Super car",
    price: 290000000,
    mileage: 0,
    brand: "Lamborghini",
    year: 2019,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
    photo: "huracan.png",
  },
];
const carListDiv = document.getElementById("cars-id");
const carListDiv1 = document.getElementById("cars-id");
let carCard = "";
let car1Card1 = "";

cars.map((car) => {
  carCard = carCard + '<div class="card">';
  carCard = carCard + '<p class="carName">' + car.model + "</p>";
  carCard = carCard + '<p class="carType">' + car.type + "</p>";
  carCard = carCard + '<img class="carPhoto" src="' + car.photo + '" alt="">';
  carCard = carCard + '<p class="carPrice">Price:' + car.price + "</p>";
  carCard = carCard + '<p class="carMileage">Mileage:' + car.mileage + "</p>";
  carCard = carCard + '<p class="carBrand">Brand:' + car.brand + "</p>";
  carCard = carCard + '<p class="carYear">Year:' + car.year + "</p>";
  carCard = carCard + "</div>";
});
cars.map((car1) => {
  car1Card1 = car1Card1 + '<div class="card">';
  car1Card1 = car1Card1 + '<p class="carName">' + car1.model + "</p>";
  car1Card1 = car1Card1 + '<p class="carType">' + car1.type + "</p>";
  car1Card1 =
    car1Card1 + '<img class="carPhoto" src="' + car1.photo + '" alt="">';
  car1Card1 = car1Card1 + '<p class="carPrice">Price:' + car1.price + "</p>";
  car1Card1 =
    car1Card1 + '<p class="carMileage">Mileage:' + car1.mileage + "</p>";
  car1Card1 = car1Card1 + '<p class="carBrand">Brand:' + car1.brand + "</p>";
  car1Card1 = car1Card1 + '<p class="carYear">Year:' + car1.year + "</p>";
  car1Card1 = car1Card1 + "</div>";
});

carListDiv.innerHTML = carCard;
carListDiv1.innerHTML = car1Card1;

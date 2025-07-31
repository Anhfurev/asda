// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  const isAvailable = cars.filter((car) => {
    return car.isAvailable === true;
  });
  return isAvailable;
  // ...
}

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  const recent = cars.filter((car) => {
    return car.year >= 2018;
  });
  return recent;
  // ...
}

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  const expensive = cars.filter((car) => {
    return car.price >= 5000000;
  });
  return expensive;
  // ...
}

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  let sedan = cars.filter((car) => {
    return car.type === "Sedan";
  });
  return sedan;
  // ...
}

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let filtered = cars.filter((car) => {
    return car.brand === brandName;
  });
  return filtered;
  // ...
}

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let highMileage = cars.filter((car) => {
    return car.mileage >= 100000;
  });
  return highMileage;
  // ...
}

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency <= 5) {
      return (car.fuelEfficiency = true);
    } else {
      return (car.fuelEfficiency = false);
    }
  });
  return cars;
  // ...
}

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  let u = cars.map((car) => {
    return { ...car, price: car.price * 1.15 };
  });
  return u;
  // ...
}

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let low = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return low;
  // ...
}

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let o = cars.sort((car, ar) => {
    return car - ar;
  });
  return o[cars.length - 1];
  // ...
}

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let u = cars.sort((car, ar) => {
    return car.price - ar.price;
  });
  return u[cars.length - 1];
  // ...
}

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let u = 0;
  cars.forEach((car) => {
    return (u += car.mileage);
  });
  return u;
  // ...
}

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filtered = cars.filter((car) => {
    return car.supplier === supplierName;
  });
  return filtered;
  // ...
  // ...
}

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let u = cars.map((car) => {
    return car.model;
  });
  return u;
  // ...
}

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  cars.sort((car, ar) => {
    return car.price - ar.price;
  });
  return cars;
  // ...
}

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let i = cars.filter((car) => {
    return car.engineSize >= 2;
  });
  return i;
  // ...
}

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let u = cars.map((car) => {
    return car.brand;
  });
  let notloop = [];
  u.forEach((brnd) => {
    if (notloop.includes(brnd)) {
      return;
    } else notloop.push(brnd);
  });
  return notloop;

  // ...
}

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let u = cars.map((car) => {
    return { model: car.model, year: car.year };
  });
  return u;
  // ...
}

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  cars.map((car) => {
    return (car.fuelEfficiency = "super efficient");
  });
  // ...
  return cars;
}

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  cars.map((car, i) => {
    return (car.id = i + 1);
  });
  return cars;
  // ...
}
let u = addIdToCars(cars);
console.log(u);

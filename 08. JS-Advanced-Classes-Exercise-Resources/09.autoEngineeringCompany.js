function autoCompany(arr) {
    const cars = new Map()
    for (const line of arr) {
        let [brand, model, producedCars] = line.split(" | ");
        producedCars = Number(producedCars)
        if (!cars.has(brand)) {
            cars.set(brand, new Map());
        }
        let brandCar = cars.get(brand)
        if (!brandCar.has(model)) {
            brandCar.set(model, 0);
        }
        const updateProducedCars = brandCar.get(model) + producedCars;
        brandCar.set(model, updateProducedCars);
    }
    cars.forEach((value, key) => {
        console.log(key);
        value.forEach((produced, model) => console.log(`###${model} -> ${produced}`));
      });


}
autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
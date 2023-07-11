function fruit (product,weightGr,price){
    let weightKg = weightGr / 1000
    let pricePerKg = weightKg * price
    console.log(`I need $${pricePerKg.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${product}.`)

}
fruit('orange', 2500, 1.80)
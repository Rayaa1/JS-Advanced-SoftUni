function breakfastRobot(){
    const recipes = {
        apple:{carbohydrate:1,flavour:2},
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    const storage ={
        protein:0,
        carbohydrate:0,
        flavour:0,
        fat:0
    }
    function restock(el,quantity){
        storage[el] += quantity
        return "Success"
    }
    function prepare(recipe,quantity){
        for (const item in recipes[recipe]) {
            let remaining = storage[item] - recipes[recipe][item] * quantity
            if(remaining < 0){
                return `Error: not enough ${item} in stock`
            }
            storage[item] = remaining
          
        }
        return "Success"
    }
    function report(){
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`
    }

    const actions = {
        'restock': restock,
        'prepare': prepare,
        'report': report
    };
    function controller(str) {
        const [command, item, quantity] = str.split(' ');
        const action = actions[command];
        if (action != undefined) { return action(item, Number(quantity)); };
    }
    return controller;
}
let manager = breakfastRobot ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4"))
console.log(manager("report"))
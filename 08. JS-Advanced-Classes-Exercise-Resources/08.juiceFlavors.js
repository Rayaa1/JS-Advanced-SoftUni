function juiceFlavors(juices){
    const bottleQuantity = 1000
    fullBottles = {}
    let obj = {}
    juices.forEach(element => {
        let [juice,quantity] = element.split(" => ")
        if(!obj.hasOwnProperty(juice)){
            obj[juice] = 0
        }
        obj[juice] += Number(quantity)
        if(obj[juice] >= bottleQuantity){
            let oneBottle = Math.trunc(obj[juice]/1000)
            if (!fullBottles.hasOwnProperty(juice)) {
                Object.assign(fullBottles, { [juice]: oneBottle });
            } else {
                fullBottles[juice] += oneBottle;
            }
            obj[juice] -= oneBottle * 1000;
        }
       
    });
    Object.entries(fullBottles).forEach(([name, quantity]) => console.log(`${name} => ${quantity}`));
}
juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
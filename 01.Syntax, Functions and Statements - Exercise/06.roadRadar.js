function roadRadar(speed, area) {
    const speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    if(speed > speedLimit[area]){
        let diff = speed - speedLimit[area]
        let status;
        if (diff > 40) {
            status = 'reckless driving';
        } else if (diff > 20) {
            status = 'excessive speeding';
        } else {
            status = 'speeding';
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[area]} - ${status}`);

    }else {
        console.log(`Driving ${speed} km/h in a ${speedLimit[area]} zone`);
    }

}
roadRadar(21, 'residential' )
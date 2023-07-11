function extract (num){
    let biggest = 0
    let result = []
    for (const el of num) {
        if(el >= biggest){
            biggest = el
            result.push(biggest)
        }
        
    }
    return result

}

extract([20,
    36,
    2,
    15,6,
    1])
function checkSameNums (num){
    let arr = num.toString().split('').map(Number)
    let sum = 0
    let isValid = true
    for(let i = 0 ; i < arr.length ; i++){
        let curr = arr[i]
        sum += curr
        if(curr !== arr[0]){
            isValid = false
        }
    }
    console.log(isValid)
    console.log(sum)

}
checkSameNums(1234)
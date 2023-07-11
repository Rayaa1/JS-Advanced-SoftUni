function sortNum (numbers){
    let sortedNum = numbers.sort((a,b)=> a-b)
    let result = []
    while(sortedNum.length !== 0){
        let firstEl = sortedNum.shift()
        let lastEl = sortedNum.pop()
        result.push(firstEl,lastEl)
    }
    return result

}
sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
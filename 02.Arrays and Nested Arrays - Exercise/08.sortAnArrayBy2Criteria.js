function sortByTwoCriteria(input){
    let sorted = input.sort((a,b)=>{
        let firstCriteria = a.length - b.length
        let secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria
    })
    console.log(sorted.join("\n"))

}
sortByTwoCriteria(['alpha',
'beta', 'gamma'] )
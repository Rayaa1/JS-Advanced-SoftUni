function argumentInfo(...input){
    let result = {}
    for (const el of input) {
        let type = typeof el
        console.log(`${type}: ${el}`)
        if(!result.hasOwnProperty(type)){
            result[type] = 0
        }
        result[type] = result[type] + 1;
    }
    let buff = ''
    for (const key in result) {
        buff += `${key} = ${result[key]}\n`
        
    }
    console.log(buff)

}
argumentInfo('cat', 42,"a", function () { console.log('Hello world!'); })
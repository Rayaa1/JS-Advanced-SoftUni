function addAndRemove (arr){
    let initial = 1
    const result = []
    arr.forEach(element => {
        if(element == "add"){
            result.push(initial)
        }else {
            result.pop()
        }
        initial += 1
        
    });
    let output =  result.length >= 1 ? result.join("\n") : "Empty"
    console.log(output)


}
addAndRemove(['add',
'add',
'remove',
'add',
'add']
)
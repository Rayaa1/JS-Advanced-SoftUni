function rotate (arr,num){
   for(let i = 0 ; i < num ; i++){
    let lastEl = arr.pop()
    arr.unshift(lastEl)
   }
   console.log(arr.join(" "))
}
rotate(['Banana',
'Orange',
'Coconut',
'Apple'],
15
)
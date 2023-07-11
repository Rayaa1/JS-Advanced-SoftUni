function solve() {
  const Camel_Case = "Camel Case"
  const Pascal_Case = "Pascal Case"
  const input = document.getElementById("text").value.toLowerCase()
  const currCase = document.getElementById("naming-convention").value
  const result = document.getElementById("result")
  if(currCase !== Camel_Case && currCase !== Pascal_Case){
    result.textContent = "Error!"
    return
  }
  let arrStr = input.split(" ")
  let output = ''
  let startingPoint = 0
  if(currCase === Camel_Case){
    output += arrStr[0]
    startingPoint = 1
  }
  for(let i = startingPoint ; i < arrStr.length;i++){
    const currWord = arrStr[i]
    output+=currWord[0].toUpperCase() + currWord.slice(1,currWord.length)

    result.textContent = output

  }
}
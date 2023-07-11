function solve() {
  const textArea = document.getElementById("input")
  const textValue = textArea.value
  let sentancesArr = textValue.split(".").filter((s)=> s!== "").map((s) => s + ".")
  const paragraphRoof = Math.ceil(sentancesArr.length / 3)
  const resultDiv = document.getElementById("output") 
  for (let i = 0 ;i < paragraphRoof; i++){
    let joinedSent = sentancesArr.splice(0,3).join("")
    resultDiv.innerHTML += `<p>${joinedSent}</p>` 
  }
}
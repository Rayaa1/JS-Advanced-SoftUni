function addItem() {
    let inputText = document.getElementById("newItemText")
    let inputValue = document.getElementById("newItemValue")
    let menu = document.getElementById("menu")
    let options = document.createElement("option")
    options.textContent = inputText.value
    options.value = inputValue.value
    menu.appendChild(options)
    inputValue.value = ''
    inputText.value = ''

}

const itemName = 'userData'
export function getUserData(){
    return JSON.parse(localStorage.getItem(itemName))
}

export function setUserData(data){
    localStorage.setItem(itemName,JSON.stringify(data))
}
export function clearUserData(){
    localStorage.removeItem(itemName)
}

export function createSumbitHandler(callback){
    return function(e){
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)

        callback(data,form)
    }

}
function lockedProfile() {
    const SHOW_MORE = "Show more"
    const HIDE_IT = "Hide it"
    let buttonEl = Array.from(document.querySelectorAll("div button"))
    for (const button of buttonEl) {
        button.addEventListener("click",show)
    }

    function show(event){
        let divChildren = Array.from(event.target.parentElement.children)
        let isLocked = divChildren[2].checked
        if(isLocked){
            return
        }
        let hiddenEl = event.target.previousElementSibling
        if(event.target.textContent === SHOW_MORE){
            hiddenEl.style.display = "inline"
            event.target.textContent = HIDE_IT
            return
        }
        hiddenEl.style.display = "none"
        event.target.textContent = SHOW_MORE

    }
}
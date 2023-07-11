function toggle() {
   const MORE = "More"
   const LESS = "Less"
   const buttonSpan = document.querySelector(".button")
   const text = document.querySelector("#extra")
   buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE
   text.style.display = text.style.display == 'block' ? 'none' : 'block';

}
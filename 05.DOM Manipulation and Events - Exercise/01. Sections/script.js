function create(words) {
   for(let word of words){
      let div = document.createElement("div");
      let p = document.createElement("p")
      p.textContent = word
      p.style.display = "none"
      div.appendChild(p)
      div.addEventListener("click",onClick)
      document.getElementById("content").appendChild(div)

   }
   function onClick(event){
      let p = event.target.children[0]
      p.style.display = "block"
   }
}
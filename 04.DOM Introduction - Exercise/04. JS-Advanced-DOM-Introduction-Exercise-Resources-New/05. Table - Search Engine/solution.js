function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll("tbody tr")

   function onClick() {
      const input = document.getElementById("searchField").value.toLowerCase()
      for (const row of rows) {
        let rowText = row.textContent.toLowerCase()
        if(rowText.includes(input)){
         row.setAttribute('class','select')
        }else {
         row.removeAttribute('class')
        }
         
      }

   }
}
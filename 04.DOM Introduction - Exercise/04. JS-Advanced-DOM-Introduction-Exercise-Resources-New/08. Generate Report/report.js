function generateReport() {
    let tableRow = document.querySelectorAll("tbody tr");
    let tableHeader = document.querySelectorAll("thead tr th");
    let res = [];
    for (let i = 0; i < tableRow.length; i++) {
        let tableData = tableRow[i].children;
        let tempData = {};
        for (let index = 0; index < tableData.length; index++) {
            let infoTheader = tableHeader[index].childNodes;
            if (infoTheader[1].checked === true) {
                let propertyName = infoTheader[0].textContent
                    .trim()
                    .toLowerCase();
                let value = tableData[index].textContent;
                tempData[propertyName] = value;
            }
        }
        res.push(tempData);
    }
    let jsonRes = JSON.stringify(res);
    document.getElementById("output").textContent = jsonRes;
}
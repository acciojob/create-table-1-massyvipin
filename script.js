function insert_Row() {
    let table = document.getElementById("sampleTable");
	let newRow = table.insertRow(0);
	
	let Cell1 = newRow.insertCell(0);
	Cell1.innerHTML = "New Cell1";
	
	let Cell2 = newRow.insertCell(1);
	Cell2.innerHTML = "New Cell2";
}

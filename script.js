function insert_Row() {
    const table = document.getElementById("sampleTable");
	let newRow = table.insertRow(0);
	
	let cell1 = newRow.insertCell(0);
	cell1.innerHTMT = "New Cell1";
	
	let cell2 = newRow.insertCell(1);
	cell2.innerHTMT = "New Cell2";
}

var fruits = [];



function maFonction() {

	var nf = document.getElementById('newFruit').value;
	fruits.push(nf);
    nouveau();
    document.getElementById('newFruit').value = "";
    console.log(nf);
}
    

function sup(i) {
	fruits.splice(i,1)
    nouveau();
	
}

function nouveau() {
	document.getElementById('fruitList').innerHTML = '';
	for ( i = 0 ; i < fruits.length ; i++ ) {
		document.getElementById('fruitList').innerHTML += 
			"<li onclick='sup("+i+");'>"+ fruits[i] + "</li>";
	}
}

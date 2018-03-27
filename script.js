//loader
var page;

function logoSpin() {
	page = setTimeout(showPage, 500);
}

function showPage() {
	document.getElementById('loader').style.display = 'none';
	document.getElementById('webPage').style.display = 'block';
}

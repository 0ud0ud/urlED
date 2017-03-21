document.getElementById("decode_button").addEventListener("click", function () {
	var text = document.getElementById("comment");
	text.value = decodeURIComponent(text.value);
}, false);

document.getElementById("encode_button").addEventListener("click", function () {
	var text = document.getElementById("comment");
	text.value = encodeURIComponent(text.value);
}, false);

document.getElementById("comment").addEventListener("keyup", function () {
	console.log(document.getElementById("comment").value)
}, false);
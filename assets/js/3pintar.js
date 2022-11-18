ele = document.getElementById("ele1");

function pintar(color) {
	ele.style.backgroundColor = color;
}
pintar("green");

ele.addEventListener("click", function () {
	pintar("yellow");
});

const divClick1 = document.getElementById("div1");
const divClick2 = document.getElementById("div2");
const divClick3 = document.getElementById("div3");
const divClick4 = document.getElementById("div4");

let selectColor = "green";

document.addEventListener("keydown", function (event) {
	selectColor;
	if (event.key === "a") {
		divClick1.style.backgroundColor = selectColor = "green";
		divClick1.textContent = "Seleccionaste el color: " + selectColor;
	} else if (event.key === "s") {
		divClick1.style.backgroundColor = selectColor = "blue";
		divClick1.textContent = "Seleccionaste el color: " + selectColor;
	} else if (event.key === "d") {
		divClick1.style.backgroundColor = selectColor = "red";
		divClick1.textContent = "Seleccionaste el color: " + selectColor;
	}
	return selectColor;
});

const click = function (e) {
	e.target.style.backgroundColor = selectColor;
};

/* divClick1.addEventListener("click", click); */
divClick2.addEventListener("click", click);
divClick3.addEventListener("click", click);
divClick4.addEventListener("click", click);

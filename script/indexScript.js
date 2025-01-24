const openFormButton = document.getElementById("create-inventory-button");
const formCont = document.getElementById("create-inventory-form-cont");
const formButton = document.getElementById("form-create-button");

openFormButton.addEventListener("click", () => {
	formCont.classList.toggle("hidden");
});

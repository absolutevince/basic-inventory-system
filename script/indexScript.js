const openFormButton = document.getElementById("create-inventory-button");
const formCont = document.getElementById("create-inventory-form-cont");
const formButton = document.getElementById("form-create-button");
const removeButtons = document.querySelectorAll(
	"button[data-name='remove-button']",
);

openFormButton.addEventListener("click", () => {
	formCont.classList.toggle("hidden");
});

removeButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("click");
		const form = document.querySelector(`form[data-id='${btn.dataset.id}']`);
		form.classList.toggle("hidden");
	});
});

const categoryInput = document.querySelector(".category-input");
const optionBtns = document.querySelectorAll(".option-btn");
const options = document.querySelector(".options");

optionBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
	});
});

categoryInput.addEventListener("focus", () => {
	options.classList.add("show");
});

categoryInput.addEventListener("blur", () => {
	options.classList.remove("show");
});

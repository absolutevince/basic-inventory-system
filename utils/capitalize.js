function capitalize(string) {
	const split = string.split("");
	return [split.shift().toUpperCase(), ...split].join("");
}

module.exports = capitalize;

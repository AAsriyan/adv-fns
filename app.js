// pure function
const add = (num1, num2) => {
	return num1 + num2;
};

// const sendDataToServer = () => {}

// console.log(add(1, 5));
// console.log(add(12, 15));

// impure functions
const addRandom = (num1) => {
	return num1 + Math.random();
};

// console.log(addRandom(5));

let previousResult = 0;

const addMoreNumbers = (num1, num2) => {
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
};

// console.log(addMoreNumbers(1, 5));

const hobbies = ["sports", "cooking"];

const printHobbies = (h) => {
	h.push("NEW HOBBY");
	console.log(h);
};

// printHobbies(hobbies);

// Factory functions
function createTaxCalculator(tax) {
	const calculateTax = (amount) => {
		return amount * tax;
	};
	return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let username = "max";

const greetUser = () => {
	let name = "Anna";
	console.log(`Hi ${name}`);
};

let name = "Maximilian";

username = "Manuel";

greetUser();

// const powerOf = (x, n) => {
// 	let result = 1;
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}

// 	return result;
// };

const powerOf = (x, n) => {
	// if (n === 1) {
	// 	return x;
	// }
	// return x * powerOf(x, n - 1);
	return n === 1 ? x : x * powerOf(x, n - 1);
};

console.log(powerOf(2, 3)); // 2 * 2 * 2

const myself = {
	name: "Max",
	friends: [
		{
			name: "Manuel",
			friends: [
				{
					name: "Chris",
					friends: [
						{
							name: "Hari"
						},
						{
							name: "Emilia"
						}
					]
				}
			]
		},
		{
			name: "Julia"
		}
	]
};

const getFriendNames = (person) => {
	const collectedNames = [];

	if (!person.friends) {
		return [];
	}

	for (const friend of person.friends) {
		collectedNames.push(friend.name);
		collectedNames.push(...getFriendNames(friend));
	}

	return collectedNames;
};

console.log(getFriendNames(myself));

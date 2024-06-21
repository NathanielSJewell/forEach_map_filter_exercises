//How do I create a function that accepts an array of numbers and multiplies each value by 2, then returns a new array with the changed values?

//Hypothesis 1: The function needs to loop through each value in the array using forEach, and pass each value to a function that multiplies the value by 2. The new value needs to be added to the new array.

//expected Result : a new array of doubled values

function doubleValues(arr) {
	let newArr = [];
	arr.forEach(function(val) {
		newArr.push(val * 2);
	});
	return newArr;
}

//formulate question : How can I create a working function called onlyEvenValues that accepts an array and returns a new array with only the even values in the array passed in?

//Hypothesis 1 : Loop through each value in the array and check if that value mod 2 is zero. If it is, add that value to the new array. If not, ignore it.

//Prediction : When passing in an array of [ 1, 2, 3, 4, 5, 6 ], I expect the new array to return [ 2, 4, 6 ].

//Test!

function onlyEvenValues(arr) {
	let newArr = [];
	arr.forEach(function(val) {
		if (val % 2 === 0) {
			newArr.push(val);
		}
	});
	return newArr;
}

//Analyze Result : The passed in array value that is evenly divisible by two is added to the new array. Else it is ignored.

//Formulate Question : How can I create a function using forEach that accepts an array of strings, and returns a new array of only the first and last character of each string?

//Hypothesis : Loop through the passed in array and execute a function for each string item that takes the string index of zero, and the string index of length -1, and creates a new string with that. Create an empty string to change around? That new string is then pushed to the new array. The function will return a new array.

//prediction : passing in an array of strings will return a new array of strings containing only the first and the last letter of the original string.

function showFirstAndLast(arr) {
	let newArr = [];
	let newStr = ``;
	arr.forEach(function(val) {
		newStr += val.charAt(0);
		newStr += val.charAt(val.length - 1);
		newArr.push(newStr);
		newStr = ``;
	});
	return newArr;
}

//Analysis : Jasmine test returned error because newStr was making all two character strings one long string, the newStr had to be cleared after each push to the new Array

//How do I write a function using forEach that accepts an array of objects, a key, and a value and returns the passed in array with the new key and value added for each object?

//Save the passed in array to a variable. Initialize a variable that stores an empty array. For each object, create obj[key] = value, push to the empty array, return empty array.

//Passing in an array, a key, and a value should return the new array of objects including the new properties.

function addKeyAndValue(arr, key, value) {
	let userArray = arr;
	let emptyArr = [];
	userArray.forEach(function(val) {
		val[key] = value;
		emptyArr.push(userArray);
	});
	return userArray;
}

//How can I write a function using forEach that accepts a string and returns an object with the keys as the value and the value as the amount of times that vowel appears in the string, and is case insensitive so both lower case and upper case should count.

//Initialize an empty object. initialize a counter. Convert string into an array using array.from(str) and save to a variable. Iterate through that new array using forEach(). For each array item run a callback function that takes each value and checks (if statemement) whether or not it is A, E, I, O, or U. If val is equal to one of those, increment counter and use object.define property to add a new property to the empty object, use val as the key and use counter as the value. reset counter each time.

//Should accept a string and return an object of present vowels and how many times they appear in the string.

//test

function vowelCount(str) {
	let obj = {};
	let counterA = 0;
	let counterE = 0;
	let counterI = 0;
	let counterO = 0;
	let counterU = 0;
	let arrayedString = Array.from(str);
	arrayedString.forEach(function(val) {
		if (val === `A` || val === `a`) {
			counterA++;
			obj[`a`] = counterA;
		}
		if (val === `E` || val === `e`) {
			counterE++;
			obj[`e`] = counterE;
		}
		if (val === `I` || val === `i`) {
			counterI++;
			obj[`i`] = counterI;
		}
		if (val === `O` || val === `o`) {
			counterO++;
			obj[`o`] = counterO;
		}
		if (val === `U` || val === `u`) {
			counterU++;
			obj[`u`] = counterU;
		}
	});
	return obj;
}

//How can I write a function using map that takes an array of numbers and doubles each value in the array, ad returns a new array?

//The callback function will take each value and multiply it by two, then return the new array.

//Pass in 123, get a new array of 2,4,6. Pass in 1, -2, -3, and return 2, -4, -6.

//test

function doubleValuesWithMap(arr) {
	let newArr = [];
	arr.map(function(val) {
		newArr.push(val * 2);
	});
	return newArr;
}

//Returns a new array with the changed values.

//How can I write a function using map that takes an array and returns a new array of values multiplied by their index in the array?

//create an empty array and save to a variable. Get each array item's (map) index using indexOf and save to a variable. Multiply that index by the array item, and push it to the empty array. reset variable to zero. return the empty array.

//test
function valTimesIndex(arr) {
	let emptyArr = [];
	arr.map(function(val) {
		let newVal = arr.indexOf(val) * val;
		emptyArr.push(newVal);
		newVal = null;
	});
	return emptyArr;
}

//How do I write a function that accepts an array of objects and a key, and returns a new array with the value of that key in each object? ==> How do I write a function that accepts an array containing a bunch of objects with names and a key, it uses the passed in key to access the keys in each object , and pushes the values of that key into an array, and returns the array.

//Create an empty array. Use map to initialize a callback function for each object in the passed in array. create a varible storing array[key]. Push array[key] to the empty array.

//Passing in an array of names and a key of 'name' should return a new array of each property value.

//test

function extractKey(arr, key) {
	let emptyArr = [];
	arr.map(function(val) {
		emptyArr.push(val[key]);
	});
	return emptyArr;
}

//works!

//How can I write a function using map that accepts an array of objects, grabs the values of each key, concatenates them together with a space, and pushes them to a new array, then returns new array?

//Create an empty array variable. map function value will be each object in the array.

function extractFullName(arr) {
	let emptyArr = [];
	let emptyStr = ``;
	arr.map(function(val) {
		if (val[`first`]) {
			emptyStr += val[`first`] + ` `;
		}
		if (val[`last`]) {
			emptyStr += val[`last`];
		}
		emptyArr.push(emptyStr);
		emptyStr = ``;
	});
	return emptyArr;
}

//How can I write a function using filter that accepts an array of objects and a key, and returns a new array that only contains the objects with the passed in key?

//create an emptyArray variable. Use filter to iterate over each object in the array. If key in val is truthy, push val to empty array. Return emptyArr.

//Should return only objects that contain that passed in key. Otherwise they are not added to the array.

//test

function filterByValue(arr, key) {
	let emptyArr = [];
	arr.filter(function(val) {
		if (key in val) {
			emptyArr.push(val);
		}
	});
	return emptyArr;
}

//it works!

//How can I write a function using filter that accepts an array of values, and a search value, that returns the searchvalue if it is found in the array, and undefined if it is not found in the array?

//iterate over the passed in array using filter. If val is equal to searchvalue, return val.
function find(arr, searchValue) {
	let value;
	arr.filter(function(val) {
		if (val === searchValue) {
			value = val;
		}
	});
	return value;
}

//How can I write a function using filter that accepts an array of objects, a key, and a searchvalue for that key, and returns an object with the first occurence of that key and value?

//Create an empty object variable. Use filter to iterate over the array of objects.  If val[key] && val[key] = searchValue && empty object variable = {}, push val to empty array.

//Should return only objects that contain the given key and searchValue.

function findInObj(arr, key, searchValue) {
	let obj;
	arr.filter(function(val) {
		if (val[key] && val[key] === searchValue && obj === undefined) {
			obj = val;
		}
	});
	return obj;
}

//As long as the key is in the object, and the key's value is equal to searchValue, and the undefined obj variable is still undefined, give the undefined variable a value of that filtered object and return it. You cannot have multiple objects that fit the criteria because obj can only be assigned a value once, because of the parameter.

//How do I write a function using filter that accepts a string, and returns a new lower case string with the vowels, both lowercase and uppercase removed?

//initialize an empty string. Iterate through each string character. use an if statement. check if string val is NOT equal to a e i o u. If that is true, add string value to empty string. return empty string.toLowerCase().

//Accept a string with vowels, and return the same string without vowels.

//test
function removeVowels(str) {
	let stringtoArray = Array.from(str);
	let emptyStr = ``;
	stringtoArray.filter(function(val) {
		if (
			val !== `A` &&
			val !== `E` &&
			val !== `I` &&
			val !== `O` &&
			val !== `U` &&
			val !== `a` &&
			val !== `e` &&
			val !== `i` &&
			val !== `o` &&
			val !== `u`
		) {
			emptyStr += val.toLowerCase();
		}
	});
	return emptyStr;
}

//How can I write a function that uses map and filter that accepts an array of numbers, and checks whether the number is even or odd, and if odd, multiplies it by 2 and then pushes that new number to an array, and returns the new array?

function doubleOddNumbers(arr) {
	let newArr = [];
	let finalArr = [];
	arr.map(function(val) {
		if (val % 2 !== 0) {
			newArr.push(val);
		}
	});
	newArr.filter(function(val) {
		finalArr.push(val * 2);
	});
	return finalArr;
}

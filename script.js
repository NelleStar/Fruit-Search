const input = document.querySelector('#fruit'); //
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const smallFruit = fruit.map(x => x.toLowerCase()); //iterating the array to make sure all chars are lowercase


function search(str) { // given
	let results = []; // given
	
	results = smallFruit.filter(function (value, index, array) { //results will be filtered fruit array
      return value.includes(str); // return truthy/falsy if the value included
    });
	console.log(results)
	return results; //
}

function searchHandler(e) { //given
	let userValue = e.target.value; //event targeting the value teh user puts in
	let smallUser = userValue.toLowerCase(); //making the user input lowercase to match array

	let results = search(smallUser)// calling previous function on the user value

	showSuggestions(results, smallUser)
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''
	let resultHtml = ''
	if(inputVal !== '' && !suggestions.classList.contains('show')) {
		suggestions.classList.add("show");
	} else if (inputVal === '') {
		suggestions.classList.remove("show");
	}
	results.forEach(result => {
		resultHtml += `<li>${result}</li>`
	});
	suggestions.innerHTML = resultHtml
}

function useSuggestion(e) {	
	if(e.target.tagName === 'LI') {
		document.getElementById('fruit').value = e.target.innerHTML
		suggestions.classList.remove("show");
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
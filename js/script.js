const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

// WERSJA 1

// const searchEngine = (e) => {
// 	const text = e.target.value.toLowerCase();

// 	li.forEach((el) => {
// 		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
// 			el.style.display = 'block';
// 		} else {
// 			el.style.display = 'none';
// 		}
// 	});
// };

// search.addEventListener('keyup', searchEngine);

// WERSJA 2

const searchEngine2 = () => {
	li.forEach((e) => {
		const match = new RegExp(search.value, 'i').test(e.textContent);
		if (!match) {
			e.style.display = 'none';
		} else {
			e.style.display = 'block';
		}
	});
};

search.addEventListener('keyup', searchEngine2);

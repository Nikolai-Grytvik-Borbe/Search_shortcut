document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key == "s") {
        const input = Array.from(document.querySelectorAll('input')).filter(x => x.offsetWidth > 0 && x.offsetHeight > 0 && ['email', 'date', 'datetime-local', 'number', 'password', 'search', 'tel', 'text', 'time', 'url'].includes(x.type));
	let search;

	if (input.length === 1) {
		input[0].focus();
		console.debug('1 focused ', input[0])
		return;
	}

	if (input.length) {
		search = input.filter(x => x.type === 'search');
		if (!search.length) search = input.filter(x => x.id === 'search');
		if (!search.length) search = input.filter(x => x.id.toLowerCase().indexOf('search') !== -1);
		if (!search.length) search = input.filter(x => x.className.toLowerCase().indexOf('search') !== -1);
		if (!search.length) search = input.filter(x => x.outerHTML.toLowerCase().indexOf('search') !== -1);
		if (!search.length) search = input.filter(x => {
			do {
				x = x.parentElement;
				if (x.id.toLowerCase().indexOf('search') !== -1) return true;
			} while (x.parentElement !== document.body)
			return false;
		});
		if (search.length) {
			// activate first (random) element in input (if exists)
			search.sort((x, y) => x.childElementCount < y.childElementCount ? -1 : 1);
			search[0].focus();
			console.debug('focused ', search[0])
			return;
		}

	}
	let inputAll = Array.from(document.querySelectorAll('*')).filter(x => x.offsetWidth > 0 && x.offsetHeight > 0);
	search = inputAll.filter(x => x.id === 'search');
	if (!search.length) search = inputAll.filter(x => x.id.toLowerCase().indexOf('search') !== -1);
	if (!search.length) search = inputAll.filter(x => x.className.toLowerCase().indexOf('search') !== -1);
	if (!search.length) search = inputAll.filter(x => x.outerHTML.toLowerCase().indexOf('search') !== -1);
	if (search.length) {
		search.sort((x, y) => x.childElementCount < y.childElementCount ? -1 : 1);
		search[0].click();
		console.debug('clicked ', search[0])

    }}
})

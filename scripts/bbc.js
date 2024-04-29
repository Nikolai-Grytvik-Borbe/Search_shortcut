document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key == "s") {
        let secondButton = document.querySelector('header > div > div > button:nth-of-type(2)');
        secondButton.click();
    }})
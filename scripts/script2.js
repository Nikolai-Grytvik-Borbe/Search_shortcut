// for websites that has a search icon/button to be clicked
document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key == "s") {
        
        // to to find the button
        var button = document.querySelector("#headerSearchIcon")
        if (!button) {
            button = document.querySelector('[data-testid="search-button"]');
        }
        if (!button) {
            button = document.querySelector('#page-header__search-button');
        }
        // ===============

        if (button) {
            button.click();
        }
    }
});

console.log("Shortcut script loaded")
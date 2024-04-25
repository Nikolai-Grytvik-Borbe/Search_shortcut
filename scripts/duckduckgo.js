// Spesific for duckduckgo

document.addEventListener('keydown', function (event) {
    if (event.shiftKey) {

        var searchBar = document.getElementById('search_form_input'); 

        if (searchBar) {
            console.log("Search bar found:", searchBar);
            searchBar.focus();
            console.log("Attempted to focus search bar.");
            // Check if focus was successful
            if (document.activeElement === searchBar) {
                console.log("Search bar is focused.");
                moveCursorToEnd(searchBar)
            } else {
                console.log("Search bar is not focused.");
            }
        } else {
            console.log("Search bar not found.");
        }
    }
});

// To select end of line
// When focusing the search bar, the text bar goes in front of the previous text
function moveCursorToEnd(input) {
    input.setSelectionRange(input.value.length, input.value.length);
}

console.log("Shortcut script loaded");
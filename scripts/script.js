// For website that has a input search bar

document.addEventListener('keydown', function (event) {
    if (event.shiftKey) {
        
        // These should catch the search bar for most websites
        var searchBar = document.querySelector('input#search');
        if (!searchBar) {
           searchBar = document.querySelector('input[type="search"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder="Search"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[aria-label="Search"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input.search-input');
        }
        if (searchBar) {
            console.log("Search bar found:", searchBar);
            searchBar.focus();
            console.log("Attempted to focus search bar.");
            // Check if focus was successful
            if (document.activeElement === searchBar) {
                moveCursorToEnd(searchBar)
                console.log("Search bar is focused.");
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
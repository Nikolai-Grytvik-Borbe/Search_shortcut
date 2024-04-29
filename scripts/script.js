// For website that has a input search bar


document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key == "s") {
        
        // Add if statement here if a website doesn't work
        var searchBar = document.querySelector('input#search');
        if (!searchBar) {
            searchBar = document.querySelector('input#ikea-search-input');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input#search-index');
        }
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
        if (!searchBar) {
            searchBar = document.getElementById("search_form_input");
        }
        if (!searchBar) {
            searchBar = document.querySelector('input#twotabsearchtextbox');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder = "search"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder = "SEARCH"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder = "Search"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder = "Search..."]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder = "Søk i Store medisinske leksikon"]');
        }
        if (!searchBar) {
            searchBar = document.querySelector('input[placeholder = "Search movies...');
        }


        // ==========================


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
// Spesific for Amazon

document.addEventListener('keydown', function (event) {
    if (event.shiftKey) {
        
        var searchBar = document.querySelector('input#twotabsearchtextbox');
        if (!searchBar) {
            searchBar = document.querySelector('input[aria-label="Search Amazon"]');
        }

        if (searchBar) {
            console.log("Search bar found:", searchBar);
            searchBar.focus();
            console.log("Attempted to focus search bar.");
            // Check if focus was successful
            if (document.activeElement === searchBar) {
                console.log("Search bar is focused.");
            } else {
                console.log("Search bar is not focused.");
            }
        } else {
            console.log("Search bar not found.");
        }
    }
});

console.log("Shortcut script loaded");
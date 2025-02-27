document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();
    
    // Fetch the games data from the games.json file
    fetch("games.json")
        .then(response => response.json())
        .then(games => {
            // Find the game matching the search query
            const game = games.find(game => game.name.toLowerCase() === query);
            
            if (game) {
                window.location.href = game.link; // Redirect to the game page
            } else {
                alert("Game not found");
            }
        });
});

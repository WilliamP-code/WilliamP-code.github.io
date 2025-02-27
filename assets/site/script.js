document.getElementById("searchInput").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const gameList = document.getElementById("gameList");

    // Clear current list
    gameList.innerHTML = "";

    // Fetch the games data from the games.json file
    fetch("games.json")
        .then(response => response.json())
        .then(games => {
            // Filter the games based on the search query
            const filteredGames = games.filter(game => 
                game.name.toLowerCase().includes(query)
            );
            
            // Display filtered games in the game list
            if (filteredGames.length > 0) {
                filteredGames.forEach(game => {
                    const gameItem = document.createElement("li");
                    const gameLink = document.createElement("a");
                    gameLink.href = game.link;
                    gameLink.textContent = game.name;
                    gameItem.appendChild(gameLink);
                    gameList.appendChild(gameItem);
                });
            } else {
                gameList.innerHTML = "<li>No games found</li>";
            }
        });
});

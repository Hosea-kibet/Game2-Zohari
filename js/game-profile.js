function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const gameTitle = getQueryParam('title') || 'Game Profile';
    const gameDescription = getQueryParam('description') || 'No description available.';
    const gameUrl = getQueryParam('url') || '';


    document.title = gameTitle;

    const gameTitleElement = document.getElementById('game-title');
    if (gameTitleElement) {
        gameTitleElement.textContent = gameTitle;
    }

 
    const gameDescriptionElement = document.getElementById('game-description');
    if (gameDescriptionElement) {
        gameDescriptionElement.textContent = gameDescription;
    }
    
    const gameUrlElement = document.getElementById('game-url');
    if (gameUrlElement) {
        gameUrlElement.href = gameUrl;
        gameUrlElement.textContent = gameUrl ? 'Play Now' : 'URL not available';
    }
});

function playGame() {
    alert("Starting the game...");
}

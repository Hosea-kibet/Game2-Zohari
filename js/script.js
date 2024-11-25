function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("open");
}

function closeMenu() {
    document.getElementById("side-menu").classList.remove("open");
}

document.addEventListener("click", (event) => {
    const sideMenu = document.getElementById("side-menu");
    const menuToggle = document.getElementById("menu-toggle");

    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("open");
    }
});

function openGameFullScreen(url) {
    const body = document.body;
    body.innerHTML = `
        <div class="fullscreen-game">
            <iframe src="${url}" frameborder="0" allowfullscreen></iframe>
            <button class="exit-fullscreen" onclick="exitFullScreen()">Exit</button>
        </div>
    `;
    body.classList.add('no-scroll'); 
}

function exitFullScreen() {

    window.location.reload();
}


// document.addEventListener('DOMContentLoaded', () => {
//     const categoriesContainer = document.querySelector('.category');
    

//     categoriesContainer.innerHTML = '';

//     const allGamesHeader = document.createElement('div');
//     allGamesHeader.className = 'category-header';
//     allGamesHeader.innerHTML = `<h2 class="category-title">All Games</h2><a href="#" class="see-all">sa</a>`;

//     const searchContainer = document.createElement('div');
//     searchContainer.className = 'search-container';
//     searchContainer.innerHTML = `
//         <input type="text" placeholder="Search games..." class="search-bar">
//     `;

//     const gamesContainer = document.createElement('div');
//     gamesContainer.className = 'games';

//     const paginationContainer = document.createElement('div');
//     paginationContainer.className = 'pagination-container';

//     categoriesContainer.appendChild(allGamesHeader);
//     categoriesContainer.appendChild(searchContainer); 
//     categoriesContainer.appendChild(gamesContainer);
//     categoriesContainer.appendChild(paginationContainer);

//     let currentPage = 1;
//     let totalPages = 1; 
//     let isLoading = false;

    
//     function showSkeletonLoaders() {
//         gamesContainer.innerHTML = ''; 
//         for (let i = 0; i < 8; i++) {
//             const gameSkeleton = document.createElement('div');
//             gameSkeleton.className = 'game skeleton-loader';
//             gameSkeleton.innerHTML = `
//                 <div class="game-image skeleton-loader"></div>
//                 <div class="skeleton-button"></div>
//             `;
//             gamesContainer.appendChild(gameSkeleton);
//         }
//     }

//     let currentBannerIndex = 0;
// let bannerGames = [];
// let bannerInterval;

// function updateBanner() {
//     if (bannerGames.length === 0) return;
    
//     const game = bannerGames[currentBannerIndex];
//     const bannerGameContainer = document.querySelector('.banner-game');
    
//     bannerGameContainer.innerHTML = `
//         <div class="banner-image">
//             <img src="${game?.avatar_link || 'assets/images/game1.svg'}" alt="${game.name}" onclick="openGameFullScreen('${game.link}')">
//         </div>
//         <button class="play-now" onclick="openGameFullScreen('${game.link}')">Play Now</button>
//     `;
    
//     currentBannerIndex = (currentBannerIndex + 1) % bannerGames.length; // Cycle through games
// }

// function startBannerRotation() {
//     clearInterval(bannerInterval); // Clear any existing interval
//     updateBanner(); // Display the first banner immediately
//     bannerInterval = setInterval(updateBanner, 5000); // Update every 5 seconds
// }

// function fetchGames(page, query = '') {
//     if (isLoading) return; 
//     isLoading = true;

//     showSkeletonLoaders();

//     const url = query 
//         ? `https://zoharicms-9ehgx.ondigitalocean.app/api/games?filters[name][$contains]=${query}&pagination[page]=${page}&pagination[pageSize]=25`
//         : `https://zoharicms-9ehgx.ondigitalocean.app/api/games?pagination[page]=${page}&pagination[pageSize]=25`;

//     fetch(url)
//         .then(response => response.json())
//         .then(gamesData => {
//             gamesContainer.innerHTML = '';
//             if (gamesData.data && gamesData.data.length > 0) {
//                 bannerGames = gamesData.data.slice(0, 5); // Store the first 5 games for banner rotation
//                 startBannerRotation(); // Start or restart banner rotation
//                 gamesData.data.forEach(game => {
//                     const gameDiv = document.createElement('div');
//                     gameDiv.className = 'game';
//                     gameDiv.innerHTML = `
//                         <div class="game-image">
//                             <img src="${game?.avatar_link || 'assets/images/game1.svg'}" alt="${game.name}" onclick="openGameFullScreen('${game.link}')">
//                         </div>
//                         <button class="play-now" onclick="openGameFullScreen('${game.link}')">Play Now</button>
//                     `;
//                     gamesContainer.appendChild(gameDiv);
//                 });

//                 totalPages = gamesData.meta.pagination.pageCount;
//                 renderPagination();
//             } else if (page === 1) {
//                 gamesContainer.innerHTML = '<p>No games available.</p>';
//             }
//             isLoading = false;
//         })
//         .catch(error => {
//             console.error('Error fetching games:', error);
//             gamesContainer.innerHTML = '<p>Error loading games.</p>';
//             isLoading = false;
//         });
// }

   
//     function renderPagination() {
//         paginationContainer.innerHTML = '';

//         const createPageButton = (pageNumber, label = pageNumber) => {
//             const button = document.createElement('button');
//             button.className = 'page-button';
//             button.textContent = label;
//             if (pageNumber === currentPage) button.classList.add('active');
//             button.addEventListener('click', () => {
//                 currentPage = pageNumber;
//                 fetchGames(currentPage, searchBar.value.trim()); 
//             });
//             return button;
//         };

        
//         if (currentPage > 1) {
//             paginationContainer.appendChild(createPageButton(currentPage - 1, '◀'));
//         }

//         for (let i = 1; i <= totalPages; i++) {
//             paginationContainer.appendChild(createPageButton(i));
//         }

//         if (currentPage < totalPages) {
//             paginationContainer.appendChild(createPageButton(currentPage + 1, '▶'));
//         }
//     }

//     fetchGames(currentPage);

//     const searchBar = document.querySelector('.search-bar');
//     let searchTimeout;
//     searchBar.addEventListener('input', (event) => {
//         const query = event.target.value.trim();
//         currentPage = 1;
//         clearTimeout(searchTimeout);
//         searchTimeout = setTimeout(() => {
//             fetchGames(currentPage, query);
//         }, 300); // 300ms delay for debounce
//     });
// });







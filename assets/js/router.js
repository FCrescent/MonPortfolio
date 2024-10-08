// router.js

import { renderHome } from './views/home.js';
import { renderAbout } from './views/about.js';

// Fonction de routage
export function router() {
    const app = document.getElementById('app');

    const basePath = 'MonPortfolio';
        
    let path = window.location.pathname;
    
    if (path.includes(basePath)) {
        path = path.replace(basePath, '');
    }


    console.log(path);
    app.innerHTML = '';

    // Routage simple basé sur le chemin de l'URL
    switch (path) {
        case '/':
        case '/home':
            renderHome(app);
            break;
        case '/about':
            renderAbout(app);
            break;
        default:
            app.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}

// Fonction pour naviguer vers une nouvelle vue sans recharger la page
export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}
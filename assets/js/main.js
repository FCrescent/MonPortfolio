import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    router();
    
    // Détecte les changements d'URL
    window.addEventListener('popstate', router);
});
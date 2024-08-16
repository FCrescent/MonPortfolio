import { navigateTo } from '../router.js';

export function renderAbout(app) {
    app.innerHTML = `
        <section>
            <h1>A propos</h1>
            <button id="homeButton">Accueil</button>
        </section>
    `;

    document.getElementById('homeButton').addEventListener('click', () => {
        navigateTo('/home');
    });
}
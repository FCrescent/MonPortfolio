import { navigateTo } from '../router.js';

export function renderHome(app) {
    app.innerHTML = `
        <section>
            <h1>Fabien Crescent</h1>
            <p>Je suis développeur web</p>
            <button id="aboutButton">A propos</button>
        </section>
    `;

    document.getElementById('aboutButton').addEventListener('click', () => {
        navigateTo('/about');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chris Roliggaard - site opdateret og klar.');

    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Luk menu' : 'Åbn menu');
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Åbn menu');
            });
        });
    }
});

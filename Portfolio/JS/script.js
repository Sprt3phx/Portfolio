document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        announce('Dark mode toggled');
    });
});

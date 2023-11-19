document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', toggleTheme);
});

function toggleTheme() {
    const themeToggleButton = document.getElementById('theme-toggle');

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Theme';
    } else {
        themeToggleButton.textContent = 'Dark Theme';
    }
}

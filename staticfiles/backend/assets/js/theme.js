"use strict";

    // theme mode change
    const body = document.querySelector("body");

    // NEW THEME STYLE
    const items = document.querySelectorAll('.theme_list');
    const button = document.getElementById('button');

    items.forEach((item) => {
        item.addEventListener('click', () => {
        const element = item.getAttribute('data-theme-style');
        document.body.classList.remove('default-theme', 'dark-theme');
        document.body.classList.add(element);
        localStorage.setItem('theme_mode', element); // Set active theme in localStorage

        updateButtonText(element);
        });
    });

    const activeTheme = localStorage.getItem('theme_mode'); // Get active theme from localStorage
    if (activeTheme) {
    document.body.classList.remove('default-theme', 'dark-theme');
    document.body.classList.add(activeTheme); // Set active theme on page load
    }

    (function() {
    // Call updateButtonText() on initial page load
    items.length > 0 &&
    updateButtonText(activeTheme || 'default-theme');
    })();

    function updateButtonText(theme) {
    const activeItem = document.querySelector(`.theme_list[data-theme-style="${theme}"]`);
    const inactiveItems = document.querySelectorAll(`.theme_list:not([data-theme-style="${theme}"])`);

    activeItem.classList.add('active');
    inactiveItems.forEach((item) => {
        item.classList.remove('active');
    });

    if (theme === 'default-theme') {
        button.innerHTML = '<i class="lar la-sun"></i>';

    } else if (theme === 'dark-theme') {
        button.innerHTML = '<i class="lar la-moon"></i>';
    } else {
        button.innerHTML = '<i class="lar la-sun"></i>';
    }
    }

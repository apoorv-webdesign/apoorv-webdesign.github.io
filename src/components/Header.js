import React from 'react';

function Header({ toggleTheme, currentTheme }) {
    return (
        <header>
            <h2><a href="#">Apoorv Anand</a></h2>
            <nav>
                <ul>
                    <li><a href="https://twitter.com/apoorv_anand_" target="_blank">Twitter</a></li>
                    <li><button onClick={toggleTheme}>
                        {currentTheme === 'dark-mode' ? 'Light Theme' : 'Dark Theme'}
                    </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

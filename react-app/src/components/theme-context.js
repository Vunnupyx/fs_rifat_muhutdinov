import React from 'react';

export const themes = {
    light: {
        background: '#fff',
    },
    dark: {
        background: '#d7d7d7',
    },
};

export const ThemeContext = React.createContext(
    themes.dark
);

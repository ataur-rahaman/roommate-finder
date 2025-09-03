import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const themeInfo = {
        theme,
        setTheme,
    }
    return (
        <ThemeContext value={themeInfo}>
            {children}
        </ThemeContext>
    );
};

export default ThemeProvider;
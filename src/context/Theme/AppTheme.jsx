import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';

export const AppTheme = createContext();

export const WebTheme = ({ children }) => {
    const [defaultTheme, setDefaultTheme] = useState(localStorage.getItem("theme") ?? "dark");

    const handleAppTheme = () => {
        setDefaultTheme(defaultTheme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const root = window.document.documentElement;

        const toggleOldTheme = defaultTheme === 'dark' ? 'light' : 'dark';

        root.classList.remove(toggleOldTheme);
        root.classList.add(defaultTheme);
        localStorage.setItem('theme', defaultTheme);
    }, [defaultTheme]);

    return (
        <AppTheme.Provider value={{ defaultTheme, handleAppTheme }}>
            {children}
        </AppTheme.Provider>
    );
};

WebTheme.propTypes = {
    children: PropTypes.node.isRequired,
};
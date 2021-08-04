import React, { useCallback, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext, themes } from '/Users/fadela/Desktop/stage/Portfolio/portfolio/src/components/Button/ThemeContext.js'

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = useCallback(() => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }, [setTheme, theme])

  return (<ThemeContext.Provider value={theme}>

    <DarkModeToggle
      onChange={setIsDarkMode}
      onClick={toggleTheme}
      style={{ ...theme }}
      checked={isDarkMode}
      size={80}
      background-color={'black'}
    />

  </ThemeContext.Provider>
  );
};
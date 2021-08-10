import React from 'react'

export const themes = { // contient les données stockées et leurs valeurs
  light: {
    color: '#000',
    backgroundColor: '#efe1bd',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#333',
  },
}

export const ThemeContext = React.createContext(
  themes.light, /* valeur par défaut*/)
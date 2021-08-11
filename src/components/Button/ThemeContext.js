import React from 'react'

export const themes = { // contient les données stockées et leurs valeurs
  light: {
    text:"black",
    color: "#A80000",
    backgroundColor: '#efe1bd',
  },
  dark: {
    text:"white",
    color: '#0000A8',
    backgroundColor: "#111",
  },
}

export const ThemeContext = React.createContext(
  themes.light, /* valeur par défaut*/)
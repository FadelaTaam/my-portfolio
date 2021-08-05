import React  from 'react'

export const themes = { // contient les données stockées et leurs valeurs
  light: {
    color: 'black',
    backgroundColor: '#e9d5a1',
  },
  dark: {
    color: 'white',
    backgroundColor: 'black',
  },
}

export const ThemeContext = React.createContext(
  themes.light, // valeur par défaut
)
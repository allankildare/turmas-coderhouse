import { createContext, useState } from 'react'

export const ThemeContext = createContext(
  { isDarkMode: false }
)

export function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggleMode() {
    setIsDarkMode(!isDarkMode)
  }

  function modeText() {
    //     condição     se verdadeiro   se falso
    return isDarkMode ? 'Tema escuro' : 'Tema claro'
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode, text: modeText() }}>
      {children}
    </ThemeContext.Provider>
  )
}

import { useState, createContext, useContext } from 'react'

import { Container } from './style'

const SettingsContext = createContext()

function App() {

  const [ preferences, setPreferences ] = useState({ theme: 'light', language: 'en'})

  const toggleTheme = () => {
    setPreferences(currentTheme => ({
      theme: currentTheme.theme === 'light' ? 'dark' : 'light'}))
  }

  const toggleLanguage = (language) => {
    setPreferences(presentLanguage => ({
      ...presentLanguage,
      language: language
    }))
  }

  return (
    <>
      <SettingsContext.Provider value={{ preferences, toggleTheme, toggleLanguage }}>
        <Container>
            <Toolbar />
            <button onClick={toggleTheme}>Trocar o tema</button>
            <div>
              <button onClick={() => toggleLanguage('pt-br')}>PT-BR</button>
              <button onClick={() => toggleLanguage('en')}>EN</button>
            </div>
        </Container>
      </SettingsContext.Provider>

    </>
  )
}

function Toolbar() {
  const { preferences } = useContext(SettingsContext)

  return (
      <div style={{background: preferences.theme === 'dark' ? 'grey' : 'white', color: preferences.theme === 'dark' ? 'white' : 'black', height: '30px', width: '300px', textAlign: 'center'}}>
        Tema utilizado - {preferences.theme}, Idioma: {preferences.language}
      </div>
  )
}

export default App

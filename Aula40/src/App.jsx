import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { Page3 } from './components/Page3'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path='/' Component={Page1}/>
          <Route path='/page2' Component={Page2}/>
          <Route path='/page3' Component={Page3}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App

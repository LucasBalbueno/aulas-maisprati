import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import { Page1 } from './components/Page1'
import { Page2 } from './components/Page2'
import { Page3 } from './components/Page3'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navigation />
          <Routes>
            <Route path='/' element={<Page1 />} />
            <Route path='/page2' element={<Navigate to="/" />}/>
            <Route path='/page3' element={<Page3 />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

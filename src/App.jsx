import React from 'react'
import Title from './components/title.jsx'
import MailBar from './components/mail-bar.jsx'
import MainContent from './components/main-content.jsx'
import Footer from './components/footer.jsx'
import Img from './components/img.jsx'
import './App.css'

function App() {

  return (
    <div className="app">
      <Img />
      <Title />
      <MailBar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import "./index.css"
import Header from './header'
import MainSection from './mainSection'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  )
}

export default App

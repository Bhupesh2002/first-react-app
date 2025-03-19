import { useState } from 'react'

import './App.css'
import Header from './components/Header' 
import Footer from './components/footer'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>  
      <Header/>
      <Content/>
      <Footer/>

    </div>
      
    </>
  )
}

export default App;

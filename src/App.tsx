import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Article from './pages/Article'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:sneakerId' element={<Article />}/>
      </Routes>
    </>
  )
}

export default App

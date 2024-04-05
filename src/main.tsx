import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import Article from './pages/Article.tsx'
// import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import Article from './pages/Article.tsx'
import Navbar from './components/Navbar.jsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
          <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)

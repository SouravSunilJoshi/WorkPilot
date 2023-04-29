import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Send from './Pages/Send'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Edit from './Pages/Edit'
import './App.css'


const App = () => {
  return (
    <>
      <BrowserRouter >
      <Navbar />
        <Routes >
          <Route index element={<Home />}/>
          <Route path='/' element={<Send />}/>
          <Route path='/send' element={<Send />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllAuthors from './components/AllAuthors'
import AddAuthor from './components/AddAuthor'
import EditAuthor from './components/EditAuthor'



function App() {
  return (
    <div className="App">
      <h1 style={{color:"#2f76d2", textShadow:"1px 1px lightBlue", margin:"15px"}}>www.FavoriteAuthors.com</h1>
      <hr style={{marginBottom:"20px"}}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllAuthors/>}/>
          <Route path='/createAuthor/' element={<AddAuthor/>}/>
          <Route path='/updateAuthor/:id' element={<EditAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


import './App.css'
import Navbar from './components/navbar'
import {Route, Routes} from "react-router-dom"
import Home from './pages/home'
import CreatePage from './pages/create'
import Contact from './pages/contact'
import About from './pages/about'
import Card from './pages/card'

const  App=()=> {
  
  return (
    <>
       <Routes>
           <Route exact element={<Navbar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/create' element={<CreatePage/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element = {<About/>}/>
              <Route path='/card' element ={<Card/>}/>
          </Route>


       </Routes>
    
    </>
  )
}

export default App

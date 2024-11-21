
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import RecipeForm from './componets/From/From'
import ViewData from './componets/ViewData/ViewData'
import EditFrom from './componets/EditForm/EditForm'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>

        <Route path = "/createrecipe" element = {<RecipeForm/>}/>

        <Route path = "/viewrecipe" element = {<ViewData/>}/>

        <Route path='/EditData/:id' element={<EditFrom />} />




      </Routes>
      
    </>
  )
}

export default App


import './App.css'
import { Routes , Route } from 'react-router-dom'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import RecipeForm from './componets/From/From'
import ViewData from './componets/ViewData/ViewData'
import EditFrom from './componets/EditForm/EditForm'
import ViewRcipes from './componets/ViewRecipes/VeiwRecipes'
import LoginFrom from './componets/Login-From/Login-From'
import RegisterForm from './componets/RegisterForm/RegisterForm'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>

        <Route path = "/createrecipe" element = {<RecipeForm/>}/>

        <Route path = "/viewrecipe" element = {<ViewData/>}/>

        <Route path='/EditData/:id' element={<EditFrom />} />

        <Route path='/ViewRcipes/:id' element={<ViewRcipes />} />

        <Route path='/LoginFrom' element={<LoginFrom />} />

        <Route path='/registerform' element = {<RegisterForm/>}/>




      </Routes>
      
    </>
  )
}

export default App

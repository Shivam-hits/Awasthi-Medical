import { BrowserRouter , Routes , Route } from "react-router-dom"
import React from 'react'
import HomePage from "../src/Pages/HomePage"
import LoginPage from "../src/Pages/login.js"
import SignUpPage from "./Pages/signup.js"
import Productpage from "./Pages/Productpage"

function App() {
  return (
    <BrowserRouter>

      {/* ROUTING --> START */}
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/signup" element = {<SignUpPage/>}/>
        <Route path="/Productpage" element = {<Productpage/>}/>
        <Route path="/Productpage/login" element = {<LoginPage/>}/>
        <Route path="/Productpage/signup" element = {<SignUpPage/>}/>
        <Route path="*" element = {<div> <h1>Error page (404 page not found)</h1> </div>}/>
      </Routes>

      {/* ROUTING --> END */}
      {/*WE DON'T HAVE TO IMPORT PAGES INDIVIDUALLY BECAUSE IF WE DO IT WILL SHOW THE HOMEPAGE(or any other main page)
      BELLOW THE REQUESTED PAGE */}
    </BrowserRouter> 
  )
}
export default App;
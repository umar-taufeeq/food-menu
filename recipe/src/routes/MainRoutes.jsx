import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipe from '../pages/SingleRecipe'
import Fav from '../pages/Fav'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/create" element={<CreateRecipe/>}/>
        <Route path ="/fav" element={<Fav/>}/>
        <Route path="/*" element={<h1 className='text-6xl text-red-500'>404 Not Found</h1>} />
        {/* Add more routes as needed */}
    </Routes>
  )
}

export default MainRoutes
import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const {data} = useContext(recipecontext);

  const reciperender=data.map((recipe) => { 
    return(
     <RecipeCard key={recipe.id} recipe={recipe}/>
    )


  })

  
  return (
    <div className='flex flex-wrap mt-5'>{ data.length> 0 ? reciperender :"NO RECIPES FOUND"}</div>
  )
}

export default Recipes
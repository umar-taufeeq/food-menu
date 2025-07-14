import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Fav = () => {
//  const {data} = useContext(recipecontext);
 const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const reciperender=favorite.map((recipe) => { 
    return(
     <RecipeCard key={recipe.id} recipe={recipe}/>
    )


  })

  
  return (
    <div className='flex flex-wrap '>{ favorite.length> 0 ? reciperender :"NO fav FOUND"}</div>
  )
}

export default Fav
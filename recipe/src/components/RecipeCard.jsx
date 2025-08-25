import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    // console.log(props);
    const{id,title, image, chef, desc} = props.recipe;
    
  return (
    <Link to={`/recipes/details/${id}`} className='mr-3 mb-3 hover:scale-103 duration-100'>
        <div className='w-[100%] sm:w-[23vw] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden '>
            <img src={image} alt={title} className='w-full h-[30vh] object-cover rounded-t-lg' />
            <h1 className='text-xl font-bold mt-2 pb-2 px-2'>{title}</h1>
            <p className='text-red-400 px-2'>Chef: {chef}</p>
            <p className='text-gray-900 mt-2 px-2'>{desc.slice(0,80)}...<small className='text-blue-400'>more</small></p>
        </div>
    </Link>
  )
}

export default RecipeCard
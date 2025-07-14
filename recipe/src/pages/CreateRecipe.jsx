import React, { use, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
import  { recipecontext } from '../context/RecipeContext';

const CreateRecipe = () => {
  const navigate=useNavigate();
    const {data,setData} = useContext(recipecontext);
    const {register,handleSubmit,reset, formState: { errors }}= useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        // console.log(recipe);
        // setData([...data, recipe]);
        const copyData = [...data];
        copyData.push(recipe);
        setData(copyData);
        localStorage.setItem("recipes", JSON.stringify(copyData));
        toast.success("Recipe added successfully")
        reset ();
        navigate("/recipes");       
    }
  return (
    // <form onSubmit={handleSubmit(SubmitHandler)}> 
    //     <input
    //     className=' border-b outline-0 p-2 block'
    //     {...register("image", { required: true })}
    //     type="url"
    //     placeholder='enter your image url here'
    //     />
    //     <small className='text-red-500'> This is error</small>
    //     <input
    //     className=' border-b outline-0 p-2 block'
    //     {...register("title", { required: true })}
    //     type="text"
    //     placeholder="Recipe Title"
    //     />
    //     <input
    //     className=' border-b outline-0 p-2 block'
    //     {...register("chef", { required: true })}
    //     type="text"
    //     placeholder="chef name"
    //     />

    //      <textarea
    //     className=' border-b outline-0 p-2 block'
    //     {...register("desc")}
        
    //     placeholder="//start fom here"
    //     ></textarea>
    //      <textarea
    //     className=' border-b outline-0 p-2 block'
    //     {...register("ingr")}
        
    //     placeholder="write your ingredients here, one per line"
    //     ></textarea>
    //      <textarea
    //     className=' border-b outline-0 p-2 block'
    //     {...register("inst")}
        
    //     placeholder="write your instruction here, one per line"
    //     ></textarea>

    //      <select
    //     className=' border-b outline-0 p-2 block'
    //     {...register("category", { required: true })}
        
      
    //     >
    //         <option className='bg-gray-800' value="breakfast">Breakfast</option>
    //         <option className='bg-gray-800' value="lunch">Lunch</option>
    //         <option className='bg-gray-800' value="snack">Snack</option>
    //         <option className='bg-gray-800' value="dessert">Dessert</option>
    //         <option className='bg-gray-800' value="dinner">Dinner</option>
    //     </select>
        
    //     <button className='mt-5 block bg-gray-900 px-4 py-2 rounded'>Save Recipe</button>
    // </form>
    <form
  onSubmit={handleSubmit(SubmitHandler)}
  className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-6 max-w-2xl mx-auto mt-10"
>
  <h2 className="text-2xl font-semibold text-gray-800">Submit a New Recipe</h2>

  {/* Image URL */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Image URL</label>
    <input
      {...register("image", { required: true })}
      type="url"
      placeholder="Enter your image URL here"
      className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
    />
     {errors.image && <small className="text-red-500">Image URL is required</small>} 
  </div>

  {/* Title */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Recipe Title</label>
    <input
      {...register("title", { required: true })}
      type="text"
      placeholder="Recipe Title"
      className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
    />
    {errors.title && <small className="text-red-500">Title is required</small>}
  </div>

  {/* Chef Name */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Chef Name</label>
    <input
      {...register("chef", { required: true })}
      type="text"
      placeholder="Chef name"
      className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
    />
    {errors.chef && <small className="text-red-500">Chef name is required</small>}
  </div>

  {/* Description */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Description</label>
    <textarea
      {...register("desc")}
      rows={3}
      placeholder="Start from here..."
      className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  {/* Ingredients */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Ingredients</label>
    <textarea
      {...register("ingr")}
      rows={4}
      placeholder="Write ingredients here, one per line"
      className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  {/* Instructions */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Instructions</label>
    <textarea
      {...register("inst")}
      rows={4}
      placeholder="Write instructions here, one per line"
      className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>

  {/* Category */}
  <div>
    <label className="block mb-1 font-medium text-gray-700">Category</label>
    <select
      {...register("category", { required: true })}
      className="w-full border border-gray-300 p-3 rounded-md bg-white outline-none focus:ring-2 focus:ring-orange-400"
    >
      <option value="">Select a category</option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="snack">Snack</option>
      <option value="dessert">Dessert</option>
      <option value="dinner">Dinner</option>
    </select>
    {errors.category && <small className="text-red-500">Category is required</small>}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition w-full"
  >
    Save Recipe
  </button>
</form>

  )
}

export default CreateRecipe
// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// import { recipecontext } from '../context/RecipeContext';
// import { set, useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';

// const SingleRecipe = () => {
//     const { data, setData } = useContext(recipecontext);
//     const params = useParams();
//     const navigate = useNavigate();
//     const recipe = data.find((recipe) => params.id == recipe.id);
//     const { register, handleSubmit, reset } = useForm({
//         defaultValues: {
//             title: recipe?.title,
//             image: recipe?.image,
//             chef: recipe?.chef,
//             desc: recipe?.desc,
//             ingr: recipe?.ingr,
//             inst: recipe?.inst,
//             category: recipe?.category


//         }
//     });



//     const UpdateHandler = (recipe) => {
//         const index = data.findIndex((recipe) => params.id == recipe.id);
//         const copyData = [...data];
//         copyData[index] = { ...copyData[index], ...recipe };
//         setData(copyData);
//         localStorage.setItem("recipes", JSON.stringify(copyData));
//         toast.success("Recipe updated successfully");
//         // console.log(index);



//     }



//     // console.log(recipe);
//     // const DeleteHandler = () => {
//     //     const filterdata = data.filter((recipe) => recipe.id != params.id);
//     //     setData(filterdata);
//     //     localStorage.setItem("recipes", JSON.stringify(filterdata));
//     //     toast.success("Recipe deleted successfully");
//     //     navigate("/recipes");

//     // }
//   const DeleteHandler = () => {
//     // 1. Remove from main data
//     const filterdata = data.filter((recipe) => recipe.id !== params.id);
//     setData(filterdata);
//     localStorage.setItem("recipes", JSON.stringify(filterdata));

//     // 2. Remove from favorites (full objects)
//     const favList = JSON.parse(localStorage.getItem("fav")) || [];
//     const updatedFavs = favList.filter((fav) => fav.id !== params.id);
//     setFavorite(updatedFavs); // Also update your state if you're managing `favorite` in React
//     localStorage.setItem("fav", JSON.stringify(updatedFavs));

//     // 3. Toast and navigate
//     toast.success("Recipe deleted successfully");
//     navigate("/recipes");
// };


//     const[favorite,setFavorite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

//     const favHandler = () => {
//         let copyfav = [...favorite];
//         copyfav.push(recipe);
//          setFavorite(copyfav);
//          localStorage.setItem("fav",JSON.stringify(copyfav));
//         toast.success("Recipe added to favorites");

//     }

//     const unFavHandler = () => {
//         const filterFav = favorite.filter((f) => f.id != recipe?.id);
//         setFavorite(filterFav);
//         localStorage.setItem("fav", JSON.stringify(filterFav));
//         toast.success("Recipe removed from favorites");
//         // console.log(filterFav);
//         // setFavorite(filterFav);
//         // console.log(favorite);
//      }
//      useEffect(()=>{

//      },[favorite])


//     return recipe ? (
//         <div className='flex flex-col sm:flex-row justify-between items-center p-4'>
//             <div className=' relative left w-1/2 p-2'>
//                 {favorite.find((f)=> f.id ==recipe?.id) ?
//                     (<i onClick={unFavHandler} className='right-[10%] absolute text-3xl text-red-400 ri-heart-fill' ></i>) :

//                     (<i onClick={favHandler} className='right-[10%] absolute text-3xl text-red-400 ri-heart-line' ></i>)}
//                 {/* <i onClick={unFavHandler} className='right-[10%] absolute text-3xl text-red-400 ri-heart-fill' ></i> */}

//                 <h1 className='text-3xl font-black'>{recipe.title}</h1>
//                 <img className='h-[30vh] ' src={recipe.image} alt="" />
//                 <p>{recipe.chef}</p>
//                 <p className='text-gray-300'>{recipe.desc}</p>
//             </div>
//             <form className='w-1/2 p-2 right' onSubmit={handleSubmit(UpdateHandler)}>
//                 <input
//                     className=' border-b outline-0 p-2 block'
//                     {...register("image", { required: true })}
//                     type="url"

//                     placeholder='enter your image url here'
//                 />
//                 <small className='text-red-500'> This is error</small>
//                 <input
//                     className=' border-b outline-0 p-2 block'
//                     {...register("title", { required: true })}
//                     type="text"

//                     placeholder="Recipe Title"
//                 />
//                 <input
//                     className=' border-b outline-0 p-2 block'
//                     {...register("chef", { required: true })}
//                     type="text"

//                     placeholder="chef name"
//                 />

//                 <textarea
//                     className=' border-b outline-0 p-2 block overflow-auto scroll-none'
//                     {...register("desc")}

//                     placeholder="//start fom here"
//                 ></textarea>
//                 <textarea
//                     className=' border-b outline-0 p-2 block'
//                     {...register("ingr")}

//                     placeholder="write your ingredients here, one per line"
//                 ></textarea>
//                 <textarea
//                     className=' border-b outline-0 p-2 block'
//                     {...register("inst")}


//                     placeholder="write your instruction here, one per line"
//                 ></textarea>

//                 <select
//                     className=' border-b outline-0 p-2 block'
//                     {...register("category", { required: true })}


//                 >
//                     <option className='bg-gray-800' value="breakfast">Breakfast</option>
//                     <option className='bg-gray-800' value="lunch">Lunch</option>
//                     <option className='bg-gray-800' value="snack">Snack</option>
//                     <option className='bg-gray-800' value="dessert">Dessert</option>
//                     <option className='bg-gray-800' value="dinner">Dinner</option>
//                 </select>

//                 <button className='mt-5 block bg-blue-500 px-4 py-2 rounded'>Update Recipe</button>
//                 <button onClick={DeleteHandler} className='mt-5 block bg-red-500 px-4 py-2 rounded'>Delete Recipe</button>
//             </form>


//         </div>
//     ) : "Loading...";
// }

// export default SingleRecipe
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      category: recipe?.category,
    },
  });

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...updatedRecipe };
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe updated successfully");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((recipe) => recipe.id !== params.id);
    setData(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    const favList = JSON.parse(localStorage.getItem("fav")) || [];
    const updatedFavs = favList.filter((fav) => fav.id !== params.id);
    setFavorite(updatedFavs);
    localStorage.setItem("fav", JSON.stringify(updatedFavs));

    toast.success("Recipe deleted successfully");
    navigate("/recipes");
  };

  const favHandler = () => {
    let copyfav = [...favorite];
    copyfav.push(recipe);
    setFavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    toast.success("Recipe added to favorites");
  };

  const unFavHandler = () => {
    const filterFav = favorite.filter((f) => f.id != recipe?.id);
    setFavorite(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
    toast.success("Recipe removed from favorites");
  };

  useEffect(() => {}, [favorite]);

  return recipe ? (
    <div className="flex flex-col sm:flex-row gap-8 p-6 max-w-6xl mx-auto">
      {/* Left: Recipe Display */}
      <div className="sm:w-1/2 bg-white rounded-2xl shadow p-6 relative h-[50%]">
        {favorite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={unFavHandler}
            className="absolute top-6 right-6 text-3xl text-red-500 ri-heart-fill cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="absolute top-6 right-6 text-3xl text-red-400 ri-heart-line cursor-pointer"
          ></i>
        )}

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          className="h-[250px] w-full object-cover rounded-xl mb-4"
          src={recipe.image}
          alt={recipe.title}
        />
        <p className="font-medium text-orange-600">👨‍🍳 {recipe.chef}</p>
        <p className="text-gray-600 mt-2">{recipe.desc}</p>
      </div>

      {/* Right: Update Form */}
      <form
        className="sm:w-1/2 bg-orange-50 rounded-2xl shadow p-6"
        onSubmit={handleSubmit(UpdateHandler)}
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-6">
          Edit Recipe
        </h2>

        <input
          className="border-b outline-0 p-2 block w-full mb-4"
          {...register("image", { required: true })}
          type="url"
          placeholder="Image URL"
        />

        <input
          className="border-b outline-0 p-2 block w-full mb-4"
          {...register("title", { required: true })}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="border-b outline-0 p-2 block w-full mb-4"
          {...register("chef", { required: true })}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="border-b outline-0 p-2 block w-full mb-4"
          {...register("desc")}
          placeholder="Description"
        ></textarea>

        <textarea
          className="border-b outline-0 p-2 block w-full mb-4"
          {...register("ingr")}
          placeholder="Ingredients (one per line)"
        ></textarea>

        <textarea
          className="border-b outline-0 p-2 block w-full mb-4"
          {...register("inst")}
          placeholder="Instructions (one per line)"
        ></textarea>

        <select
          className="border-b outline-0 p-2 block w-full mb-6"
          {...register("category", { required: true })}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dessert">Dessert</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;

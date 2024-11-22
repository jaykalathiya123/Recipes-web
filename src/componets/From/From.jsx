import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/Action/recipAction";
import { useDispatch } from "react-redux";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    timing: "",
  });

  const navigate =  useNavigate() 

  const dispatch =  useDispatch() 

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createRecipe(recipe)); // Thunk action

    navigate("/viewrecipe");

    alert("Recipe added successfully!");
    
    setRecipe({ title: "", ingredients: "", instructions: "", timing: "" });
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 md:p-8 lg:max-w-xl">
        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
          Add a New Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              placeholder="Enter recipe title"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
  
          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ingredients
            </label>
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              placeholder="List ingredients separated by commas"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="3"
              required
            ></textarea>
          </div>
  
          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Instructions
            </label>
            <textarea
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              placeholder="Write step-by-step instructions"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="5"
              required
            ></textarea>
          </div>
  
          {/* Recipe Timing */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <label className="block text-gray-700 font-medium">
              Recipe Timing (in minutes)
            </label>
            <input
              type="number"
              name="timing"
              value={recipe.timing}
              onChange={handleChange}
              placeholder="e.g., 30"
              className="w-full sm:w-40 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default RecipeForm;

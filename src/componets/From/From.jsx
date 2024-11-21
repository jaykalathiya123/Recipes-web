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
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-green-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Add a New Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
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
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Recipe Timing */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Recipe Timing (in minutes)
            </label>
            <input
              type="number"
              name="timing"
              value={recipe.timing}
              onChange={handleChange}
              placeholder="e.g., 30"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;

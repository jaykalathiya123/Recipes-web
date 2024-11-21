import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editRecipesData } from '../../services/Action/recipAction';
import { useDispatch, useSelector } from 'react-redux';

const EditFrom = () => {
  const { id } = useParams();  // Get the `id` from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { recipes } = useSelector((state) => state.recipReducer);

  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    timing: '',
  });

  useEffect(() => {
    // Find the recipe based on `id` and set it to state
    const fetchedRecipe = recipes.find((recipe) => recipe.id === id);
    if (fetchedRecipe) {
      setRecipe(fetchedRecipe); // Populate the form with the fetched recipe data
    }
  }, [id, recipes]); // Re-run whenever `id` or `recipes` changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editRecipesData(id, recipe)); // Update the recipe by `id`
    navigate('/viewrecipe'); // Redirect to view recipe page after update
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-green-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
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
            <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
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
            <label className="block text-gray-700 font-medium mb-1">Instructions</label>
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
            <label className="block text-gray-700 font-medium mb-1">Recipe Timing (in minutes)</label>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFrom;

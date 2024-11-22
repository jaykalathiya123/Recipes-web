import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../services/Action/recipAction';
import { useNavigate } from 'react-router-dom';
import { DeltedRecipes } from '../../services/Action/recipAction';

const ViewData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipes } = useSelector((state) => state.recipReducer);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/EditData/${id}`);
  };


  const handleRemove = (id) => {
    dispatch(DeltedRecipes(id)) ;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-400 to-blue-600 flex flex-col items-center p-6">
      <h2 className="text-4xl font-extrabold text-white mb-6">Your Recipes</h2>
  
      {(Array.isArray(recipes) && recipes.length > 0) ? (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-lg"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              {recipe.title}
            </h3>
  
            <p className="text-gray-700 mb-2">
              <strong className="text-blue-500">Ingredients:</strong> {recipe.ingredients}
            </p>
  
            <p className="text-gray-700 mb-2">
              <strong className="text-blue-500">Instructions:</strong> {recipe.instructions}
            </p>
  
            <p className="text-gray-700 mb-4">
              <strong className="text-blue-500">Timing:</strong> {recipe.timing} minutes
            </p>
  
            <div className="flex justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                onClick={() => handleEdit(recipe.id)}
              >
                Edit
              </button>
  
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                onClick={() => handleRemove(recipe.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg font-medium">No recipes found. Start adding some delicious recipes!</p>
      )}
    </div>
  );
  
};

export default ViewData;

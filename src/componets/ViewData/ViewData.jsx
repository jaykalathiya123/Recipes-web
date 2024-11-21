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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold mb-4">Recipes</h2>
      

      {(Array.isArray(recipes) && recipes.length > 0) ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">

            <h3 className="text-xl font-bold">{recipe.title}</h3>

            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>

            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            
            <p><strong>Timing:</strong> {recipe.timing} minutes</p>

            <button
              className="bg-blue-400 p-3"
              onClick={() => handleEdit(recipe.id)} 
            >
              Edit
            </button>

            <br />

            <button
              className="bg-red-500 p-3 mt-3"
              onClick={() => handleRemove(recipe.id)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>  // Show a message if no recipes are found
      )}
    </div>
  );
};

export default ViewData;

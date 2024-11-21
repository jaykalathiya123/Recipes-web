//  the Action Flie 


import { collection, addDoc, getDocs, setDoc , doc, deleteDoc } from "firebase/firestore";

import { db } from "../../fierbase";


export const CREATE_RECIPE = "CREATE_RECIPE";
export const FETCH_RECIPES = "FETCH_RECIPES"; 
export const EDIT_RECIPES = "EDIT_RECIPES" ;
export const REMOVE_RECIPES = "REMOVE_RECIPES" ;





export const createRecipe = (recipe) => async (dispatch) => {
    try {
      const docRef = await addDoc(collection(db, "recipes"), recipe);
      console.log("Recipe added with ID:", docRef.id);
  
      dispatch({
        type: CREATE_RECIPE,
        payload: { id: docRef.id, ...recipe },
      });
      dispatch(fetchRecipes())

    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };
  
  export const editRecipesData = (id, recipe) => async (dispatch) => {
    try {
      // Update the recipe in Firestore
      await setDoc(doc(db, 'recipes', id), { ...recipe, id });
  
      dispatch({
        type: EDIT_RECIPES,
        payload: { ...recipe, id },
      });

      dispatch(fetchRecipes())
    } catch (error) {
      console.error('Error editing recipe:', error);
    }
  };
  export const DeltedRecipes = (id) => async (dispatch) => {
    try {
      // Delete the recipe from Firebase
      await deleteDoc(doc(db, "recipes", id));
  
      // Dispatch action to remove recipe from Redux state
      dispatch({
        type: REMOVE_RECIPES,
        payload: id,  // Pass the recipe's ID to the payload
      });
      dispatch(fetchRecipes())

    } catch (error) {
      console.error("Error deleting recipe:", error);  // Log the error
    }
  };
  export const fetchRecipes  = () => async (dispatch) => {

    try {

        const querySnapshot = await getDocs(collection(db, "recipes"));

        const recipes = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          dispatch({
            type: FETCH_RECIPES,
            payload: recipes,
          });
    }catch (error){
        console.error("Error fetching recipes: ", error);
    }
}



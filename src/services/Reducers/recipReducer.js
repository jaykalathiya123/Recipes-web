const initialState = {
    recipes: [],
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_RECIPE":

        return {
          ...state,
          recipes: [...state.recipes, action.payload],
        };
  
      case "FETCH_RECIPES":
        return {
          ...state,
          recipes: action.payload,
        };

        case "EDIT_RECIPES" :
            return {
                ...state ,
                recipes : action.payload
            }

            case "REMOVE_RECIPES" : 
            return {
                ...state  ,
                
                recipes : action.payload
            }
  
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  
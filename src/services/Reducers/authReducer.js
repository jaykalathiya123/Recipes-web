const initialistate = {
    login : false ,
    user  : null ,
    loading : true ,
    error : null ,
}

const authReducers  = (state =  initialistate, action) => {
        
    switch(action.type) {
        case 'LoginSuccess' :
            return{
                ...state ,
                login : true ,
                user : action.payload ,
                loading : false
            }

        case 'RegisterSuccess' : 

            return {
                ...state ,
                loading : false ,
            }

            case 'LogoutSuccess' :
                return {
                    ...state ,
                    login : false ,
                    user : null ,
                    loading : false ,
                }

              

            case 'LogoutError ' : 
                return {
                    ...state ,
                    loading :  false ,
                    error : action.payload ,
                }

            default :  
                return state
            
    }
        
}
export default authReducers 

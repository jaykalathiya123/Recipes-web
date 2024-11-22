import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../fierbase"; 
import { doc, setDoc } from "firebase/firestore";

// Action Creators
const RegisterSuccess = () => ({
  type: "RegisterSuccess",
});

const LoginSuccess = (user) => ({
  type: "LoginSuccess",
  payload: user,
});

const LogoutError = (error) => ({
  type: "LogoutError",
  payload: error,
});


export const registerAsync = (data) => async (dispatch) => {
    try {
     
      const userCreate = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCreate.user;
  
      
      console.log("Creating user document in Firestore...");

      await setDoc(doc(db, "users", user.uid), {

        username: data.username,
        email: data.email,
        uid: user.uid,
      });
      
      console.log("User document successfully created in Firestore!");
  
      dispatch(RegisterSuccess());

      console.log("Registration successful!");

    } catch (error) {
      console.error("Registration Error:", error);
    }
  };
  


export const loginAsync = (email, password) => async (dispatch) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);

    const login = userLogin.user;

    localStorage.setItem("user-login-id", login.uid);

    dispatch(LoginSuccess(login));

    console.log("Login successful!");
  } catch (error) {
    console.error("Login Error:", error.message);
    localStorage.removeItem("user-login-id");
  }
};

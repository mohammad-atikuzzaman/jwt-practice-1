import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

export const MyContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  
  const RegisterWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const GoogleRegister = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const LoginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const email = currentUser?.email || user?.email;
      const logedUser = { email };

      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:3000/jwt", logedUser, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.success) {
              // navigate(location?.state ? location?.state : "/");
              console.log("jwt res :", res)
            }
          })
          .catch((err) => console.log(err));
      }else{
        axios.post("http://localhost:3000/logout", logedUser, {withCredentials: true})
        .then( res => {
          console.log(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
      }
    });
    return unsubscribe;
  }, []);

  const contexts = {
    RegisterWithEmailPass,
    LoginWithEmailPass,
    loading,
    user,
    setLoading,
    GoogleRegister,
    LogOut,
    updateUserProfile,
  };
  return <MyContext.Provider value={contexts}>{children}</MyContext.Provider>;
};

export default AuthContext;

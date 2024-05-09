import { useContext } from "react";
import { MyContext } from "./Contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";



const ProtectedRoute = ({children}) => {
  const {user, loading}= useContext(MyContext)
  const location = useLocation()

  if(loading){
    return(
      <div className="w-screen-xl h-screen flex justify-center items-center"><h2 className="font-black text-red-500">Loading...</h2></div>
    )
  }
  if(user){
    return children
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>
  // return (
  //   <div>
      
  //   </div>
  // );
};

export default ProtectedRoute;
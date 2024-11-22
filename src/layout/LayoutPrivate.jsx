import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext.jsx";

const LayoutPrivate = () => {
    const {user} = useContext(UserContext);

    //const navigate = useNavigate();
    // useEffect(() => {
      //  if (!user) {
        //    navigate("/")
       // }
   // }, [user])

    return (
        <div>
            <h1>Layout privado</h1>
            {
                user? <Outlet /> : <Navigate to="/"/>
            }
        </div>
    )
};

export default LayoutPrivate;

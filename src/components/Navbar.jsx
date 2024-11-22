import {NavLink, useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx";
import {useContext} from "react";

const Navbar = () => {
    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate();

    console.log(useContext(UserContext))
    const closeSession = () => {
        setUser(false)
        navigate("/")
    }

    const handleLogin = () => {
        setUser({name:"Javier"})
        navigate("/dashboard")
    }
    return (
        <nav>
            <NavLink to="/">Home | </NavLink>

            {
                user && <NavLink to="/dashboard">Dashboard | </NavLink>
            }
            {
                user ? (
                    <NavLink onClick={handleLogout}>Cerrar Sesion</NavLink>
                ):(
                    <>
                        <NavLink to="/login">Login | </NavLink>
                        <NavLink to="/registro">Registro | </NavLink>
                    </>
                )
            }
        </nav>
    );
};

export default Navbar;

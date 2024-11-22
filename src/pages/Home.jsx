import {UserContext} from "../context/UserContext.jsx";
import {useContext} from "react";
const Home = () => {
    const {user, setUser} = useContext(UserContext)
    console.log(user)
    return (
        <h1>Home</h1>
    )
};

export default Home;

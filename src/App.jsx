import { NavLink } from "react-router-dom";
//import NavBar from "./Components/NavBar/NavBar";
//import Login from "./Components/Login/Login";
//import Register from "./Components/Register/Register";
//import Footer from "./Components/Footer/Footer";
//import Aside from "./Aside/Aside";

function App() {
  return ( <>
    <NavLink to="admin">
      <button className='my-button'>Go to AdminProfile</button>
    </NavLink>
    <NavLink to="movies">
      <button className='my-button'>Go to Movies</button>
    </NavLink>
    <NavLink to="register">
      <button className='my-button'>Go to Register</button>
    </NavLink>
    <NavLink to="login">
      <button className='my-button'>Go to Login</button>
    </NavLink>
  </>)
}

export default App;

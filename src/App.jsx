import { Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <br />
      <Login />
      <br />
      <br />
      <Register />
      <Footer />
    </>
  );
}

export default App;

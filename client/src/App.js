import { Routes, Route, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import FormCreate from "./components/Form/FormCreate";
import FormEdit from "./components/Form/FormEdit";
import Home from "./components/Home/Home";
import { NavbarLayout } from "./components/Layout/Navbar/Navbar";

function App() {
  return (
    <>
      <NavbarLayout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create-user" element={<FormCreate />} />
        <Route path="/edit-user/:id" element={<FormEdit />} />
      </Routes>
    </>
  );
}

export default App;

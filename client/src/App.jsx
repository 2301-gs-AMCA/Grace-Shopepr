import { Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

// import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import Items from "./components/Shop/Items";
import SingleItem from "./components/Shop/SingleItem";
import { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import "./App.css";

function App() {
  const { user } = useAuth();
  const [err, setErr] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/items" element={<Items />} />
        <Route path="/shop/items/:itemId" element={<SingleItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

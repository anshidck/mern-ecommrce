import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from './pages/Register'
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import DetailsPage from "./pages/DetailsPage";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import SearchPage from "./pages/SearchPage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Products from "./components/user/Products";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTotals } from "./features/cart/cartSlice";
import FAQPage from "./pages/FAQpage";
import Checkout from "./pages/Checkout";


function App() { 
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [dispatch, cartItems])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/details/:id" element={<DetailsPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/editProduct/:id" element={<EditProduct/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route/>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;

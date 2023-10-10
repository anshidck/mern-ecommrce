import { useSelector } from 'react-redux';
import ShippingInfo from '../components/user/ShippingInfo';
import CartData from '../components/user/CartData'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart)
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState(null);
  
  const navigate = useNavigate();
   
  const cartItems = cart.cartItems;
  const totalprice = cart.cartTotalAmount

  const paymentSubmit = () => {
    const shippingAddress = {
      address1, 
      address2,
       zipCode,
      country,
       city
    }
    const orderData = {
      cartItems,
      totalprice,
      shippingAddress,
      user,
      
    }
    localStorage.setItem('latestOrder', JSON.stringify(orderData));
    navigate('/payment')
  }
    
  
  return (
    <div className="w-full flex-col items-center py-8">
      <div className="grid md:grid-cols-2 md:p-9 gap-6">
        <div className="w-full col-span-1">
          <ShippingInfo
          user={user}
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          address1={address1}
          setAddress1={setAddress1}
          address2={address2}
          setAddress2={setAddress2}
          zipCode={zipCode}
          setZipCode={setZipCode}/>
        </div>
        <div className="w-full col-span-1">
          <CartData cart={cart}/>
        </div>
      </div>
      <div>
        <button onClick={paymentSubmit} className="text-white bg-teal-700 flex md:justify-center  py-2 px-2 rounded mx-auto text-sm">Go to Payment</button>
      </div>
     </div>
  )
}

export default Checkout
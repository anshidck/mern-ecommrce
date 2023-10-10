import Hero from '../components/user/Hero'
import Category from '../components/user/Category'
import Products from '../components/user/Products'
import Navbar from '../components/user/Navbar'
import Footer from '../components/user/Footer'


function Dashboard() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Dashboard
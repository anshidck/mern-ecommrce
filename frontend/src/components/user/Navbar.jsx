import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { HiShoppingBag } from 'react-icons/hi'
import { useSelector } from 'react-redux'



function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  return (
    <div className='h-[60px] sm:h-[80px] w-full flex justify-between bg-teal-700 items-center md:px-7 z-10 sticky-top'>
      <div className='px-4'>
        <Link to='/'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold flex gap-2 text-white'><FaShoppingCart size={30}/> E-SHOP </h1>
        </Link>
      </div>
      <div>
        <ul className='hidden md:flex gap-5 font-semibold text-white '>
          <Link to='/'>Home</Link>
          <Link to='/product'>Product</Link>
          <Link to='/faq'>FAQ</Link>
        </ul>
      </div>
      <div>
        <ul className='flex gap-10 px-5 text-xl font-bold items-center justify-center text-white'>
        <Link to='/search' className='hidden md:flex' >
           <AiOutlineSearch size={25} color='white'/>
        </Link>
          <Link className='hidden md:flex'><MdFavorite size={25} /></Link>
          <Link to='/cart' className='flex relative'>
          <HiShoppingBag size={25}/>    
            <span className='bg-white rounded-full text-xs h-[17px] px-1 absolute ml-4 text-teal-700'>{ cartTotalQuantity }</span>
          </Link>
          <Link to='/profile' className='hidden md:flex' ><BsPersonCircle size={25}/></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
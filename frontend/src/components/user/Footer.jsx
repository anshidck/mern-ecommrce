import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
import { AiFillHome, AiOutlineSearch, AiFillSetting  } from 'react-icons/ai'
import { FaQuestionCircle } from 'react-icons/fa'

function Footer() {
  return (
    <div className='flex justify-center md:hidden h-[60px] sm:h-[80px] w-full bg-teal-700 items-center z-10 sticky'>
      <div className='flex items-center gap-5 sm:gap-14'>
        <Link to='/' className='flex flex-col justify-center items-center text-white font-bold text-sm'><AiFillHome size={25}/> Home</Link>
        <Link to='/search' className='flex flex-col justify-center items-center text-white font-bold text-sm'><AiOutlineSearch size={25}/>Search</Link>
        <Link to='/wishlist' className='flex flex-col justify-center items-center text-white font-bold text-sm'><MdFavorite size={25}/> WishList</Link>
        <Link to='/faq' className='flex flex-col justify-center items-center text-white font-bold text-sm'><FaQuestionCircle size={25}/> FAQ</Link>
        <Link to='/profile' className='flex flex-col justify-center items-center text-white font-bold text-sm'><AiFillSetting size={25}/> Setting</Link>
      </div>
    </div>
  )
}

export default Footer
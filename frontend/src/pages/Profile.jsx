import React, { useState } from 'react'
import Sidebar from '../components/user/Sidebar'
import ProfileContent from '../components/user/ProfileContent'
import Navbar from '../components/user/Navbar'

function Profile() {
    const [active, setActive] = useState(1)
  return (
    <>
    <Navbar/>
    <div className='flex w-full p-4 gap-5'>
        <div className='w-[20%]'>
            <Sidebar active={active} setActive={setActive}/>
        </div>
        <ProfileContent/>
    </div>
    </>
  )
}

export default Profile
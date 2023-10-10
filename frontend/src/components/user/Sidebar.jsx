import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsFillBagFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

function Sidebar({setActive, active}) {
  return (
    <div className="w-full bg-white border border-teal-700 flex flex-col h-screen gap-2 rounded p-3 justify-between">
      <div>
        <div className="items-center p-2 border-b border-black">
          <button onClick={() => setActive(1)} className={active === 1 ? ('w-full px-3 rounded flex items-center gap-2 font-bold text-lg text-white bg-teal-700') : (`flex items-center gap-2 font-bold text-lg text-teal-700`)}>
            <CgProfile /> Profile
          </button>
        </div>
        <div className="items-center p-2 border-b border-black">
          <button onClick={() => setActive(2)} className={active === 2 ? ('w-full px-3 rounded flex items-center gap-2 font-bold text-lg text-white bg-teal-700') : (`flex items-center gap-2 font-bold text-lg text-teal-700`)}>
            <BsFillBagFill /> Orders
          </button>
        </div>
        <div className="items-center p-2 border-b border-black">
          <button onClick={() => setActive(3)} className={active === 3 ? ('w-full px-3 rounded flex items-center gap-2 font-bold text-lg text-white bg-teal-700') : (`flex items-center gap-2 font-bold text-lg text-teal-700`)}>
            <FaAddressBook /> Address
          </button>
        </div>
      </div>
      <div className="items-center p-2">
        <button className="flex items-center gap-2 font-bold text-lg text-teal-700">
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

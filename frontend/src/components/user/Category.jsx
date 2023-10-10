import { AiOutlineShoppingCart, AiOutlineTrophy } from "react-icons/ai";
import { GrRotateRight } from "react-icons/gr";
import { BsShieldLockFill } from "react-icons/bs";

function Category() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  justify-between bg-white w-[93%] border-2 border-teal-700 mx-auto my-7 p-4  rounded items-center">
      <div className="flex items-center gap-2 my-2 col-span-1">
          <div>
            <AiOutlineShoppingCart size={40} color="#0e7479" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-teal-700">Free Shipping</h1>
            <p className="text-xs sm:text-sm text-teal-700">From all order over $100</p>
          </div>
        </div>
        <div className="flex items-center gap-2 col-span-1">
          <div>
            <GrRotateRight size={40} color="#0e7479" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-teal-700">Daily Surprise Offers</h1>
            <p className="text-xs sm:text-sm text-teal-700">Save up to 25% off</p>
          </div>
        </div>
        <div className="flex items-center gap-2 my-2 col-span-1">
          <div>
            <AiOutlineTrophy size={40} color="#0e7479" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-teal-700">Affortable Prices</h1>
            <p className="text-xs sm:text-sm text-teal-700">Get factory direct price</p>
          </div>
        </div>
        <div className="flex items-center gap-2 col-span-1">
          <div>
            <BsShieldLockFill className="text-4xl" color="#0e7479" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-teal-700">Secure Payments</h1>
            <p className="text-xs sm:text-sm text-teal-700">100% Protected Payments</p>
          </div>
        </div>
    </div>
  );
}

export default Category;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "../features/product/productSlice";
import Card from "../components/user/Card";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

function SearchPage() {
  const [search, setSearch] = useState("");
  const { items } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItem({ search }));
  }, [dispatch, search]);
  return (
    <>
      <Navbar />
      <div className="p-5">
        <input
          value={search}
          className="px-4 py-2 outline-none font-bold w-full border-2 border-teal-700 rounded"
          type="search"
          placeholder="Search Product....."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 p-3 md:p-9">
          {items && items.map((item) => <Card item={item} key={item._id} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;

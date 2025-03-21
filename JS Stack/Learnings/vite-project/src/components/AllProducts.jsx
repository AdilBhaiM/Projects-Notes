import { useEffect, useState } from "react";
import { setProduct } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AllProducts = () => {
  const Allproducts = useSelector((state) => state.AllProduct.products);
  const disptach = useDispatch();
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
      console.log("Res", res.data);
      // disptach(setProduct(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(Allproducts);
  return <h1>Hello My List</h1>;
  
};
export default AllProducts;

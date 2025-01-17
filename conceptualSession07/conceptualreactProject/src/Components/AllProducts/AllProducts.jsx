import { useEffect, useState } from "react"
import SingleProduct from "../SingleProduct/SingleProduct";
import PropTypes from 'prop-types'


const AllProducts = ({ handleSelectedProduct }) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.Products));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      {Products.map((product) => (
        <SingleProduct
          key={product.id}
          handleSelectedProduct={handleSelectedProduct}
          product={product}
        ></SingleProduct>
      ))}
    </div>
  );
};

AllProducts.propTypes = {
  handleSelectedProduct: PropTypes.func.isRequired
};
export default AllProducts

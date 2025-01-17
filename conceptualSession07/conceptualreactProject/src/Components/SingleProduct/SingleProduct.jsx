import PropTypes from 'prop-types'
const SingleProduct = ({ product, handleSelectedProduct}) => {
  const { name, image, description, price, category, isFeature } = product;
  return (
    <div className="m-3 w-80 border shadow-md p-1">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <p>${price}</p>
        <p>{`${isFeature ? category : "not listed category"}`}</p>
      </div>
      <button
        onClick={(() => handleSelectedProduct(product))}
        className="p-1 active:bg-red-50 rounded-md bg-green-50 border border-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
  handleSelectedProduct: PropTypes.func
};

export default SingleProduct

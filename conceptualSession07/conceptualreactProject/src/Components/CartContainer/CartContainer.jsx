import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';
import About from '../About/About';


const CartContainer = ({
  handleIsActive,
  isActive,
  selectedProducts,
  handleDeleteBtn,
}) => {
  return (
    <div className="mr-5 space-y-3">
      <p>container</p>
      <div className="flex justify-between">
        <button
          className={`${
            isActive.Cart
              ? " bg-red-500 px-3 py-2 rounded-md"
              : "px-3 py-2 rounded-md"
          }`}
          onClick={() => handleIsActive("Cart")}
        >
          Cart
        </button>
        <button
          className={`${
            isActive.Cart
              ? "px-3 py-2 rounded-md"
              : "bg-red-500 px-3 py-2 rounded-md"
          }`}
          onClick={() => handleIsActive("About")}
        >
          About
        </button>
      </div>

      {isActive.Cart ? (
        <Cart
          selectedProducts={selectedProducts}
          handleDeleteBtn={handleDeleteBtn}
        ></Cart>
      ) : (
        <About></About>
      )}
    </div>
  );
};

CartContainer.propTypes = {
  handleIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  selectedProducts: PropTypes.array.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired
};

export default CartContainer

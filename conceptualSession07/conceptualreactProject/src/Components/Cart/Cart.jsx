import PropTypes from 'prop-types'

const Cart = ({ selectedProducts, handleDeleteBtn }) => {
  return (
    <div>
      {selectedProducts.map((product) => (
        <div key={product.id}>
          <div className="flex items-center gap-3">
            <img className="w-28" src={product.image} alt="" />
            <p>name: {product.name}</p>
            <button
              onClick={() => handleDeleteBtn(product.id)}
              className="border p-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired
};

export default Cart

import PropTypes from 'prop-types'

const Header = ({ selectedProducts, price }) => {
  return (
    <div className="flex justify-between m-4 border-b pb-4 ">
      <p>logo</p>
      <div>
        <ul className="flex gap-4">
          <li>home </li>
          <li>Product </li>
          <li>Cart {selectedProducts.length}</li>
          <li>$ {price}</li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  price: PropTypes.number
};
export default Header

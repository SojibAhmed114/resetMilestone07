import './bottle.css';
import PropTypes from "prop-types";

const Bottle = ({ bottle, handleBuyClick }) => {
  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <p>Brand name: {name}</p>
      <p>Price: {price}</p>
      <button onClick={()=> handleBuyClick(bottle)}>Buy Now</button>
    </div>
  );
};

Bottle.propTypes ={
  bottle: PropTypes.object.isRequired,
  handleBuyClick: PropTypes.func.isRequired
}

export default Bottle

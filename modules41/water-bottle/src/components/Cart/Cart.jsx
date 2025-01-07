import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ card }) => {
  return (
    <div>
      <p>
        {" "}
        <span
          style={{
            backgroundColor: "red",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Cart: {card.length}
        </span>{" "}
      </p>
      <div className="cart-container">
        {card.map((photo, inx) => (
          <img key={inx} src={photo.img}></img>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes ={
  card: PropTypes.any.isRequired 
}

export default Cart;

import { useEffect, useState } from "react";
import Bottle from "../../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getLocalStorage } from "../../../Utility/Utility";
import Cart from "../../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('bottle.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  },[]);

  useEffect(()=>{
    //console.log('call the useEffect', bottles.length)
    if (bottles.length > 0) {
      const storeCart = getLocalStorage();
      //console.log(storeCart);
      const saveCart = [];
      for (const id of storeCart) {
        const bottle =  bottles.find(bottle => bottle.id ===id);
        if(bottle){
          saveCart.push(bottle)
        }
      }
      setCart(saveCart);
    }
  },[bottles]);

  const handleBuyClick =(bottle) => {
    setCart([...cart, bottle]);
    addToLs(bottle.id);
  }
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
          available bottle: {bottles.length}
        </span>{" "}
      </p>
      <br />
      <Cart card={cart}></Cart>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleBuyClick={handleBuyClick}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}


export default Bottles

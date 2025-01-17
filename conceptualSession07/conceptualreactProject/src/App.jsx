import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts/Allproducts";
import CartContainer from "./Components/CartContainer/CartContainer";
import Header from "./Components/Header/Header";
import { toast } from "react-toastify";

function App() {
  const [isActive, setIsActive] = useState({ Cart: true, status: "Cart" });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const handleAddMoney = pr =>{
    setPrice(price + pr)
  }
  const handleDeletePrice =(id) =>{
    const productDelete = selectedProducts.find(p=> p.id ==id);
    setPrice(price - productDelete.price);
  }

  const handleIsActive = (status) => {
    if (status == "Cart") {
      setIsActive({ Cart: true, status: "Cart" });
    } else {
      setIsActive({ Cart: false, status: "active" });
    }
  };
  const handleSelectedProduct = (product) => {
    // add condition same product not add
    const checkProduct = selectedProducts.find((p) => p.id == product.id);
    if (checkProduct) {
      toast.warn("Wow so easy!");
    } else {
      handleAddMoney(product.price);
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleDeleteBtn = id =>{
    handleDeletePrice(id);
    const remainingProduct = selectedProducts.filter(p => p.id !==id);
    setSelectedProducts(remainingProduct)
  }

  return (
    <>
      <Header price={price} selectedProducts={selectedProducts}></Header>
      <div className="flex justify-between">
        <AllProducts
          handleSelectedProduct={handleSelectedProduct}
        ></AllProducts>
        <CartContainer
          selectedProducts={selectedProducts}
          handleDeleteBtn={handleDeleteBtn}
          isActive={isActive}
          handleIsActive={handleIsActive}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;

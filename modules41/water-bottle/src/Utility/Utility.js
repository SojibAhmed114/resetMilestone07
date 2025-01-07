//. check/get local storage 
const getLocalStorage = () =>{
  const storeCartString = localStorage.getItem("cart");
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
}

//. setItem into localStorage 
const saveToLs = cart =>{
  const cartStringify = JSON.stringify(cart)
  localStorage.setItem('cart', cartStringify)
}

//. add to local storage
const addToLs = id => {
  const cart = getLocalStorage();
  cart.push(id);
  saveToLs(cart)
  
}
export {addToLs, getLocalStorage}
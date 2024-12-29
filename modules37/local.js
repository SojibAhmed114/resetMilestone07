const addLocalStorage = () => {
  const inputId = document.getElementById('input-id');
  const id = inputId.value;
  const inputValue = document.getElementById('input-value');
  const values = inputValue.value;
  if(id && values){
    localStorage.setItem(id, values);
  }

  inputId.value ="";
  inputValue.value = "";
};

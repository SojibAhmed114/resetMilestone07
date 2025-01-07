const Water = ({watch}) => {
  const { brand, price } = watch;
  return (
    <div>
      <p style={{color: "red"}}>Watch: {brand}</p>
      <p style={{color: "green"}}>price: {price}</p>
    </div>
  );
};

export default Water;

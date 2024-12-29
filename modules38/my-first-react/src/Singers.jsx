/* eslint-disable react/prop-types */
export default  function Singers ({singer}){

  return (
    <div>
      <h4>name:{singer.name}</h4>
      <p>age: {singer.age}</p>
    </div>
  );
}
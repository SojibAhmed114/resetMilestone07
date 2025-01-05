const UseEffectFriend = ({friend}) =>{
  console.log(friend);
  return(
    <div style={{border:"1px solid red"}}>
      <p>Name: {friend.name} </p>
      <p>id: {friend.id}</p>
    </div>
  )
}
export default UseEffectFriend
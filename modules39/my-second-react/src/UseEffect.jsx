/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import UseEffectFriend from "./UseEffectFriend";


const  UseEffect = () => {
  const [friends , setFriends] =useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data));
  },[]);
  return (
    <div>
      {/* <h3>User:{allData.length}</h3> */}
      {
        friends.map(friend => <UseEffectFriend friend={friend}></UseEffectFriend>)
      }
    </div>
  )
}

export default UseEffect


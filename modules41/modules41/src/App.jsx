import { useState, useEffect } from "react";
import "./App.css";
import Water from "./components/Water/Water";

function App() {
  // use fake api for test method one
  // const watches = [
  //   { id: 1, price: 1457, brand: "sumsung" },
  //   { id: 1, price: 6844, brand: "i-phone" },
  //   { id: 1, price: 1457, brand: "lenevo" },
  // ];

  // use fake api for test method two: use chat gpt collect data
  // const watches = [
  //   {
  //     id: 101,
  //     brand: "Omega",
  //     price: 5000,
  //   },
  //   {
  //     id: 102,
  //     brand: "Rolex",
  //     price: 10000,
  //   },
  //   {
  //     id: 103,
  //     brand: "Seiko",
  //     price: 350,
  //   },
  // ];

  // use fake api for test method three: use chat gpt collect json data create json file into public folder
  const [watches, setWatches] = useState([]);
  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  return (
    <>
      <h1>React</h1>
      {watches.map((watch) => (
        <Water key={watch.id} watch={watch}></Water>
      ))}
    </>
  );
}

export default App;

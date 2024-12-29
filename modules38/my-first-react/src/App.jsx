/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singers from './Singers';

function App() {
  const actors = ['sakil', 'karun', 'alomgir', 'jodu Lal'];
  const singers = [
    {id: 1, name: 'mahfuzur rahman', age: 68},
    {id: 2, name: 'himel', age: 28},
    {id: 3, name: 'nazmul', age: 22},
    {id: 4, name: 'rashed', age: 81},
    {id: 5, name: 'sanarul', age: 54},
  ];
  return (
    <>
      <h4>Vite + React</h4>
      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      <Todo Task="Learn React" isDone={true}></Todo>
      <Todo Task="React Core Concept" isDone={false}></Todo>
      <Todo Task="Try JSX" isDone={true}></Todo>
      <Person></Person>
      
      <Devo></Devo>
      <Device Name="Laptop" Price="2500"></Device>
      <Device Name="Mobile" Price="10000"></Device>
      <Device Name="Tablet" Price="15245"></Device>
      <Student subject="bangla" marks="78"></Student>
      <Student subject={'math'} marks={45}></Student>
      <Student subject="English" marks={41}></Student>
    </>
  )
}


// eslint-disable-next-line react/prop-types
function Student({subject = 0, marks = 0}){
  const colorStyleInfo = {
    margin: '20px',
    backgroundColor: 'green',
    padding: '20px',
    color: 'white',
    borderRadius: '10px'
  }
  return (
    <div style={colorStyleInfo}>
      <h3>this is a studens</h3>
      <p>Subject: {subject} </p>
      <p>Marks: {marks} </p>
    </div>
  )
}


function Person (){
  const personInfo = {name: 'Learn Three js', age:22};
  return <h3 className='studentsInfo'>Hey! {personInfo.name}</h3>
};

function Devo(){
  const colorStyleInfo = {
    margin: '20px',
    backgroundColor: 'green',
    padding: '20px',
    color: 'white',
    borderRadius: '10px'
  }
  return (
    <div style={colorStyleInfo}>
      <h2>ki prolem hoichilo</h2>
      <p> javascript </p>
      <p> react js</p>
      <p> react native</p>
    </div>
  )
}
function Device (props) {
  return(
    <div className='studentsInfo'>
      <h4>This Device: {props.Name} Price: {props.Price} </h4>
    </div>
  )
}



export default App

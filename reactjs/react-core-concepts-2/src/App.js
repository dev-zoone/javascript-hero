import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">

      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
      <Products></Products>

    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  // counter increse funtion //
  const inCreseCount = () => {
    setCount(count + 1)
  }
  // counter decrese funtion //
  const deCreseCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={inCreseCount}>Increse</button>
      <button onClick={deCreseCount}>Decrese</button>
    </div>
  )
}

//  Product Compnent Similer Look Different data //
const products = [
  { name: "laptop", price: 50000 },
  { name: "Phone", price: 35000 },
  { name: "Tab", price: 43000 },
  { name: "Watch", price: 3500 }
]

function Products() {
  return (
    <div className='products'>
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  )
}
function Product(props) {
  return (
    <div className='product'>
      <h3>Name : {props.name} </h3>
      <p>Price : {props.price} </p>
    </div>
  )
}


//  Use User API data loand UserEffect function //
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>External Users</h1>
      <div className='external-users'>
        {
          users.map(user => <User name={user.name} email={user.email} address={user.address.city}></User>)
        }
      </div>
    </div>
  )
}
// User Component //
function User(props) {
  return (
    <div className='user'>
      <h3>Name : {props.name}</h3>
      <p>Email : {props.email}</p>
      <p>Address : {props.address}</p>
    </div>
  )
}

export default App;

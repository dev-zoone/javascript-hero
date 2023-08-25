import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Device name="Samsong" price="23432"></Device>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App

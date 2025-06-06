import { useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [count, setCount] = useState(0)

  const ref = useRef();
  const ref_One = useRef(0);
  const add=()=>{
    ref_One.current = ref_One.current +1;
    console.log(ref_One.current);
    return ref_One.current;
  }
  
  useEffect(() => {
    ref.current.style.backgroundColor = "red"
  });
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={()=>setCount(count+1)}>
          count A is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

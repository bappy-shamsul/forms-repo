import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './components/Forms/Forms'
import Stateful from './components/Stateful/Stateful'
import RefForm from './components/RefFoem/RefForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
  
      <h1>Vite + React</h1>
      {/* <Forms></Forms> */}
      {/* <Stateful></Stateful> */}
      <RefForm></RefForm>
    </div>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Forms from './components/Forms/Forms'
// import Stateful from './components/Stateful/Stateful'
// import RefForm from './components/RefFoem/RefForm'
// import Hooks from './components/Hook/Hooks'
// import Hookks from './components/TestHooks/Hookks'
import ReusableForm from './components/ReusableForm/ReusableForm'

function App() {
  // const [count, setCount] = useState(0)

  const handleSignSubmit = data =>{
    console.log('sign up', data)
}
  const handleUpdateSubmit = data =>{
    console.log('updated', data)
}


  return (
    <>
      <div>
  
      <h1>Welcome to Form Factory!!</h1>
      {/* <Forms></Forms> */}
      {/* <Stateful></Stateful> */}
      {/* <RefForm></RefForm> */}
      {/* <Hooks></Hooks> */}
      {/* <Hookks></Hookks> */}
      <ReusableForm formTitle='Sign Up' handleSubmit={handleSignSubmit}></ReusableForm>
      <ReusableForm formTitle='Update Profile' submitBtn='Update' handleSubmit={handleUpdateSubmit}></ReusableForm>
    </div>
    </>
  )
}

export default App

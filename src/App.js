import { MyButton } from './myButton'
import { About } from './about'
import { Profile } from './profile'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    // alert('hello there')
    setCount(count + 1)
  }
  return (
    <div className='App'>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <About />
      <Profile />
    </div>
  )
}

export default App

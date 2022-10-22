import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouteList } from './routes/RouteList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouteList/>
    </div>
  )
}

export default App

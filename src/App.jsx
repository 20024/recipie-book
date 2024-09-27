import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import MealInfo from './component/MealInfo'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Routes>
      <Route path='/' element={<Header />} />
      <Route path="/meal/:id" element={<MealInfo />} /> 
      </Routes>
  )      
}

export default App

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const getCountValue = () => Number(localStorage.getItem('count') || 0)
  const [count, setCount] = useState(getCountValue)
  const [step, setStep] = useState(1)

  // Incrémentation
  function increment() {
    const newCount = Number(count + step)
    setCount(newCount)
  }

  // Décrementation
  function decrement() {
    const newCount = Number(count - step)
    setCount(newCount)
    
  }

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  return (
    <div className="container">
      <h1 className="text-center text-blue-100">Counter</h1>

      <input type='number' value={count} onChange={e => setStep(Number(e.target.value))}/>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

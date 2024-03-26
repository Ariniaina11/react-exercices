import './App.css';
import { useEffect, useState } from 'react';

function useLocalStorageState(initialValue, key){
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function App() {
  const getCountValue = () => Number(localStorage.getItem('count') || 0)
  const [count, setCount] = useLocalStorageState(getCountValue, 'count')
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

 

  return (
    <div className="container">
      <h1 className="text-blue-600">Counter : {count}</h1>

      <input type='number' value={step} onChange={e => setStep(Number(e.target.value))}/>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

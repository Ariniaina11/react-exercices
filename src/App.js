import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  useEffect(() => {

  }, [])

  return (
    <div className="container">
      <h1 className="text-center text-blue-100">Counter</h1>

      <input type='number' value={count} onChange={e => setStep(Number(e.target.value))}/>

      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
    </div>
  );
}

export default App;

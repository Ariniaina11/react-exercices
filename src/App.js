import './App.css';
import { useState } from 'react';

function Button({onClick, count}){
  return(
    <button onClick={onClick}>You click me {count} time(s)</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <div className="bg-amber-700">
      <Button onClick={handleClick} count={count} />
      <Button onClick={handleClick} count={count} />
    </div>
  );
}

export default App;

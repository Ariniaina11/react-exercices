import './App.css';
import { useEffect, useState } from 'react';

function useLocalStorageState(initialValue, key){
  const [state, setState] = useState(initialValue)
  
  useEffect(() => {    
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

function App() {
  const getNeedValue = () => JSON.parse(localStorage.getItem('needs') || `"{None}"`);
  const [need, setNeed] = useLocalStorageState(getNeedValue, 'needs')

  function getNeedHandle(){
    // Add here you need (String, Number, Array, Object, Boolean)
    const yourNeed = {
      pc : 'MacBook Pro',
      girlFriend : {
        color : 'white',
        height : 1.60,
        boyFriend : false
      },
      health: true
    }
    setNeed(yourNeed)
  }

  return (
    <div className="text-center my-auto mx-auto">
      <h1 className="text-7xl text-gray-500 font-mono">Tell me your needs !</h1>
      <div className='mt-10'>
        <button type='button' className='px-7 bg-green-600 text-white text-4xl' onClick={getNeedHandle}>GET</button>
      </div>
      <span className='text-gray-600'>{JSON.stringify(need)}</span>
    </div>
  );
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  return (
    <button className='btn' type='button' onClick={() => setCount((count) => count + 1)}>
      Rookie {count}
    </button>
  );
}

export default App;

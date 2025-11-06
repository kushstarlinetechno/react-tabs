import { useEffect, useState } from 'react';

const HomeTab = () => {
  const [inputVal, setInputVal] = useState('');
  useEffect(() => {
    console.log('HomeTab mounted');
  }, []);
  return (
    <div>
      <h3>Home Tab</h3>
      <input
        type="text"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        placeholder="Type something..."
      />
      <p>Value: {inputVal}</p>
    </div>
  );
};

export default HomeTab;

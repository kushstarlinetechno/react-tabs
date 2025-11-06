import React, { useEffect, useState } from 'react';

const UserTab = () => {
  const [inputVal, setInputVal] = useState('');
  useEffect(() => {
      console.log('UserTab mounted');
    }, []);
  return (
    <div>
      <h3>User Tab</h3>
      <input
        type="text"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        placeholder="Username..."
      />
      <p>Username: {inputVal}</p>
    </div>
  );
};

export default UserTab;

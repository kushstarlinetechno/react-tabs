import { useEffect, useState } from 'react';

const ReportTab = () => {
 const [inputVal, setInputVal] = useState('');
    useEffect(() => {
      console.log('ReportTab mounted');
    }, []);
  return (
    <div>
      <h3>Report Tab</h3>
      <textarea
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        placeholder="Write report..."
      />
      <p>Report: {inputVal}</p>
    </div>
  );
};

export default ReportTab;

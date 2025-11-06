import React from 'react';
import { useLayout } from '../context/LayoutContext';

const Header = () => {
  const { activeLayout, setActiveLayout } = useLayout();
  return (
    <header style={{height: '60px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ccc'}}>
      <h2>Header {new Date().toLocaleString()}</h2>
      <select style={{marginLeft: '20px'}} onChange={(e) => setActiveLayout(e.target.value)} value={activeLayout}>
        <option value="layout1">Layout 1</option>
        <option value="layout2">Layout 2</option>
        <option value="layout3">Layout 3</option>
      </select>
    </header>
  );
};

export default Header;

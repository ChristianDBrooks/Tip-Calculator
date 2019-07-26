import React from 'react';
import './App.css';
import TipCalculator from './client/components/Calculator'

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <TipCalculator width="500px" col1="8" col2="4" />
    </div>
  )
}

export default App;

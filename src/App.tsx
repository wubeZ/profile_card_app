import React from 'react';
import './App.css';
import Card from './components/card';
import data from './data/data';

function App() {
  return (
    <div className=''>
      <div className='flex justify-center text-center h-screen items-center bg-slate-300'>
        {data?.map(profile => (
          <Card {...profile}/>  
        ))}
      </div>
    </div>
  );
}

export default App;

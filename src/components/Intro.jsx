import React from 'react'
import './Intro.css'


export default function Intro() {
  return (
      <div className='intro'>
          
          <div className='cnt'>
              <div className="logo">Leveling</div>
        <div className='phrase'>
          Aventúrate a aprender el futuro
              </div>
          </div>
      <div className='imagen'>
        
        <img src="./code.png" height={500}/>
      </div>
    </div>
  );
}

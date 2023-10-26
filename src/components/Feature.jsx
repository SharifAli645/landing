import React from 'react'
import "./Feature.css"
import phrase from './history'
export default function Feature() {

   const createMarkup = () => {
     return { __html: phrase.data };
  };
  
  return (
    <div className="cnt_about">
      <div className="about_title">Nuestra historia</div>
      <div className="cnt_phrase" dangerouslySetInnerHTML={createMarkup()}>
        
      </div>
    </div>
  );
}

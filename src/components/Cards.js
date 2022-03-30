import React, { useState, useEffect } from "react";
import "./cards.css";
import ReactCardFlip from 'react-card-flip';
import superMarioLogo from './superMario.png';

export default function Cards (props) {
    const [isFlipped, setFlipped] = useState(false);
    const [cardIcon, setCardIcon] = useState("");
      return (
        <div className="card">
           
             <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>

             <div className=' location-front-item  frontCard'>
                  <div className='FirstCardsFrontText'>
                  <button className="btn-grad" onClick= {()=>{setFlipped(!isFlipped)} }>
                        <img src={superMarioLogo} width="100%" height="100%"></img>
                  </button>
                  </div>
             </div>
 
              <div className=' location-back-item backCard'>
                  <div>
                  <button className="btn-grad" onClick= {()=>{setFlipped(!isFlipped)} }>
                    <img src={props.icon} width="80%" height="80%"></img>
                  </button>
                  </div>
              </div>
            
            </ReactCardFlip>
        </div>
      );
  }
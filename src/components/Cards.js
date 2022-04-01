import React, { useState, useEffect } from "react";
import "./cards.css";
import ReactCardFlip from 'react-card-flip';
import superMarioLogo from './superMario.png';

export default function Cards (props) {
      return (
        <div className="card">
             <ReactCardFlip isFlipped={props.isFlipped} flipDirection='vertical'>
               
             <div className=' location-front-item  frontCard'>
                  <div className='FirstCardsFrontText'>
                  <button className="btn-grad" onClick= {()=>{props.setFlipped(props.id)} }>
                        <img src={superMarioLogo} width="100%" height="100%"></img>
                  </button>
                  </div>
             </div>
 
              <div className=' location-back-item backCard'>
                  <div>
                  <button className="btn-grad" onClick= {()=>{props.setFlipped(props.id)} }>
                    <img src={props.icon} width="80%" height="80%"></img>
                  </button>
                  </div>
              </div>
            
            </ReactCardFlip>
        </div>
      );
  }
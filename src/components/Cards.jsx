/* eslint-disable react/prop-types */
import React from 'react';
import './cards.css';
import ReactCardFlip from 'react-card-flip';
import box from './box.png';

export default function Cards(props) {
  const { id } = props;
  const { setFlipped } = props;
  const { isFlipped } = props;
  const { icon } = props;
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className=" location-front-item  frontCard">
          <div className="FirstCardsFrontText">
            <button type="button" className="btn-grad" onClick={() => { setFlipped(id); }}>
              <img src={box} width="100%" height="80%" alt="" />
            </button>
          </div>
        </div>
        <div className=" location-back-item backCard">
          <div>
            <button type="button" className="btn-grad" onClick={() => { setFlipped(id); }}>
              <img src={icon} width="100%" height="80%" alt="" />
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

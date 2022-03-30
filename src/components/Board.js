import React from "react";
import "./Board.css";
import Cards from './Cards.js';
import blooper from '../images/blooper.png';
import chomp from '../images/chomp.png';
import flower from '../images/flowerFire.png';
import goomba from '../images/goomba.png';
import luma from '../images/luma.png';
import mushroom from '../images/mushroomRed.png';
import shell from '../images/redShell.png';
import star from '../images/star.png';
import shuffle from "lodash.shuffle";

let icons = [blooper,chomp,flower, goomba, luma,mushroom,shell,star,blooper,chomp,flower, goomba, luma,mushroom,shell,star];
icons = shuffle(icons);

class Board extends React.Component {
    render() {
      return (
        <div className="grid-container">
          <div className="header">header</div>
          <div className="column-1">
            <Cards icon={icons[0]}/>
          </div>
          <div className="column-2">
          <Cards icon={icons[1]}/>
          </div>
          <div className="column-3">
          <Cards icon={icons[2]}/>
          </div>
          <div className="column-4">
          <Cards icon={icons[3]} />
          </div>
          <div className="column-5">
          <Cards icon={icons[4]}/>
          </div>
          <div className="column-6">
          <Cards icon={icons[5]}/>
          </div>
          <div className="column-7">
          <Cards icon={icons[6]}/>
          </div>
          <div className="column-8">
          <Cards icon={icons[7]}/>
          </div>
          <div className="column-9">
          <Cards icon={icons[8]}/>
          </div>
          <div className="column-10">
          <Cards icon={icons[9]}/>
          </div>
          <div className="column-11">
          <Cards icon={icons[10]}/>
          </div>
          <div className="column-12">
          <Cards icon={icons[11]}/>
          </div>
          <div className="column-13">
          <Cards icon={icons[12]}/>
          </div>
          <div className="column-14">
          <Cards icon={icons[13]}/>
          </div>
          <div className="column-15">
          <Cards icon={icons[14]}/>
          </div>
          <div className="column-16">
          <Cards icon={icons[15]}/>
          </div>
        </div>

      );
    }
  }
  
export default Board;
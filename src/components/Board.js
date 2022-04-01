import React, { useState, useEffect } from "react";
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

// const init = () =>{
//   let deck = [blooper,chomp,flower, goomba, luma,mushroom,shell,star,blooper,chomp,flower, goomba, luma,mushroom,shell,star];
//   deck = shuffle(deck);
//   return {
//     deck,
//     pair: [],
//     match:false,
//     attemps: 0
//   };
// }



export default function Board() {
  const [cards, setCards] =  useState([{id:0, isFlipped: false}, {id:1, isFlipped: false}, {id:2, isFlipped: false},
    {id:3, isFlipped: false}, {id:4, isFlipped: false}, {id:5, isFlipped: false}, {id:6, isFlipped: false},{id:7, isFlipped: false},
    {id:8, isFlipped: false}, {id:9, isFlipped: false}, {id:10, isFlipped: false}, {id:11, isFlipped: false},{id:12, isFlipped: false},
    {id:13, isFlipped: false}, {id:14, isFlipped: false}, {id:15, isFlipped: false}]);

  const [pair, addPair] = useState([]);


  // function cardsFlipped(){
  //   let flipped = 0;
  //   cards.forEach(element => {
  //   });
  // }

  function changeFlip(cardId){
    let card = cards.find(x => x.id === cardId);
    let state = card.isFlipped;
    card.isFlipped = (!state);
    let newCards = cards;
    newCards[card.id] = card;
    setCards([...newCards]);
    if (state===true){

    }
  }

  function createBoard(){
    const row =[];
    for (let i = 0; i < 16; i++) {
      let column = "column-"+i;
      row.push(
      <div className = {column}>
        <Cards id={cards[i].id} isFlipped={cards[i].isFlipped} icon={icons[i]} setFlipped = {changeFlip}/>
      </div>);
    }
    return row;
  }
   
  return (
        <div className="grid-container">
          <div className="header">Memory game</div>
          {createBoard()}

        </div>

  );
}
  
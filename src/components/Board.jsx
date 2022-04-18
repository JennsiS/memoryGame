/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import './Board.css';
import shuffle from 'lodash.shuffle';
import swal from 'sweetalert';
import Cards from './Cards';
import blooper from '../images/blooper.png';
import chomp from '../images/chomp.png';
import flower from '../images/flowerFire.png';
import goomba from '../images/goomba.png';
import luma from '../images/luma.png';
import mushroom from '../images/mushroomRed.png';
import shell from '../images/redShell.png';
import star from '../images/star.png';
import title from './title.png';
import 'animate.css';

let icons = [
  blooper, chomp, flower, goomba, luma, mushroom, shell, star,
  blooper, chomp, flower, goomba, luma, mushroom, shell, star,
];
icons = shuffle(icons);

export default function Board() {
  const [cards, setCards] = useState([
    { id: 0, isFlipped: false, icon: icons[0] }, { id: 1, isFlipped: false, icon: icons[1] },
    { id: 2, isFlipped: false, icon: icons[2] }, { id: 3, isFlipped: false, icon: icons[3] },
    { id: 4, isFlipped: false, icon: icons[4] }, { id: 5, isFlipped: false, icon: icons[5] },
    { id: 6, isFlipped: false, icon: icons[6] }, { id: 7, isFlipped: false, icon: icons[7] },
    { id: 8, isFlipped: false, icon: icons[8] }, { id: 9, isFlipped: false, icon: icons[9] },
    { id: 10, isFlipped: false, icon: icons[10] }, { id: 11, isFlipped: false, icon: icons[11] },
    { id: 12, isFlipped: false, icon: icons[12] }, { id: 13, isFlipped: false, icon: icons[13] },
    { id: 14, isFlipped: false, icon: icons[14] }, { id: 15, isFlipped: false, icon: icons[15] },
  ]);
  const [pairs, updatePair] = useState([]);
  const [attempts, updateAttempts] = useState(0);
  const [correctPairs, addPairs] = useState([]);
  const [remainingCards, updateRemaining] = useState([...cards]);
  function changeFlip(cardId) {
    const card = cards.find((x) => x.id === cardId);
    const state = card.isFlipped;
    const newPair = pairs;
    const newCards = cards;
    const remaining = remainingCards;
    const correctPairsIds = correctPairs.filter((x) => x.id === cardId).length;
    const flippedCards = remaining.filter((x) => x.isFlipped === true).length;
    if ((flippedCards < 2) && (correctPairsIds === 0)) {
      // Change the flip state of the card that has been choosen
      card.isFlipped = (!state);
      newCards[card.id] = card;
      setCards([...newCards]);
      // Check if the card is flipped with the icon and the array that has the pairs is less than 2
      if (state === false && pairs.length < 2) {
        newPair.push(card);
        updatePair([...newPair]);
      }
      const getPair = pairs;
      // Check when a pair is made
      if (getPair.length === 2) {
        let newAttempt = attempts;
        // Check if the icons of the pair cards are equal
        if (getPair[0].icon === getPair[1].icon) {
          // alert('Nueva pareja 🌟');
          const indexFirstCard = remaining.map((x) => x.id).indexOf(getPair[0].id);
          remaining.splice(indexFirstCard, 1);
          const indexSecondCard = remaining.map((x) => x.id).indexOf(getPair[1].id);
          remaining.splice(indexSecondCard, 1);
          updateRemaining([...remaining]);
          // Delete the pair of the array for compare pairs
          const cardsPair = getPair.splice(0, 2);
          updatePair([...getPair]);
          const newPairs = correctPairs;
          newPairs.push(cardsPair[0]);
          newPairs.push(cardsPair[1]);
          addPairs([...newPairs]);
          if (correctPairs.length === 16) {
            swal('🥳¡Juego completado! 🥳');
            // alert('🥳 ¡Juego completado! 🥳');
          }
        } else {
          setTimeout(() => {
            const updateCards = cards;
            const card1 = updateCards.find((x) => x.id === getPair[0].id);
            const card2 = updateCards.find((x) => x.id === getPair[1].id);
            const card1State = card1.isFlipped;
            const card2State = card2.isFlipped;
            // Flip the cards that doesn't match
            card1.isFlipped = !card1State;
            card2.isFlipped = !card2State;
            updateCards[card1.id] = card1;
            updateCards[card2.id] = card2;
            setCards([...updateCards]);
            getPair.splice(0, 2);
            updatePair([...getPair]);
          }, 2000);
        }
        newAttempt += 1;
        updateAttempts(newAttempt);
      }
    }
  }
  function createBoard() {
    const row = [];
    for (let i = 0; i < 16; i += 1) {
      const column = `column-${i}`;
      const cardId = cards[i].id;
      const flipState = cards[i].isFlipped;
      const iconCard = cards[i].icon;
      row.push(
        <div className={column}>
          <Cards id={cardId} isFlipped={flipState} icon={iconCard} setFlipped={changeFlip} />
        </div>,
      );
    }
    return row;
  }
  return (
    <div className="grid-container">
      <div className="header">
        <img src={title} width="60%" height="90%" className="animate__animated animate__rubberBand" alt="" />
      </div>
      <div className="numAttempts">
        <h2>
          Intentos:
          {' '}
          {attempts}
          {' '}
        </h2>
      </div>
      {createBoard()}
    </div>
  );
}

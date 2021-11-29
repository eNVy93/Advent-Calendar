import React, { useState } from 'react';
import { errors } from '../Helpers/errors';

var _openMonth = 12;

function updateCardInLocalStorage(card) {
  let cards = JSON.parse(localStorage.getItem('cards'));
  let index = cards.findIndex(c => c.day === card.day)
  cards[index].open = true;
  localStorage.setItem('cards', JSON.stringify(cards));
}

export default function CalendarCard(props) {
  let cardClass = "card";
  const [open, setOpen] = useState(props.card.open);

  var canOpen = (card) => {
    console.log("Card before open: " + card.open)
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return (month === _openMonth && day >= card.day) ? true : false;
  }

  var openCard = (card) => {
    if (canOpen(card)) {
      setOpen(true)
      updateCardInLocalStorage(card);
    } else {
      alert(errors[Math.floor(Math.random() * errors.length)]);
    }
  }

  return (
    <div>
      <div className={cardClass + (open ? "-open" : "")} onClick={() => openCard(props.card)}>
        <img
          className="card-image"
          src={props.card.img}
          alt="image"
        />
        <p>{props.card.day}</p>

        <div className="card-body">
          <span className="bg"></span>
          <span className="bg"></span>
          <span className="bg"></span>
          <div className="content">
            <h3 className="title">DAY {props.card.day}</h3>
            <p className="para">{props.card.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
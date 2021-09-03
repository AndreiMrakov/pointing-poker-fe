import React from "react";
import Card from "./card";
import { CardType } from "./type";

const PanelCards = () => {
  //TODO: get list from axios
  const listCards: CardType[] = [];

  return (
    <ul>
      {listCards.map((card: CardType) => <Card card={card} key={card.id} />)}
    </ul>
  );
};

export default PanelCards;

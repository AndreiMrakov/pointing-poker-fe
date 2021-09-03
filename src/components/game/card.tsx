import React, { FC } from "react";
import { CardType } from "./type";

type Props = {
  card: CardType;
};

const Card: FC<Props> = ({ card }) => {
  const { name } = card;

  return <div>{name}</div>;
};
export default Card;

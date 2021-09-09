import React from "react";
import { CardNest } from "./CardNest";
import { Table } from "./Table";

interface ICommonArea {
  isCardVisible: boolean;
  selectedCardValue: string;
  setIsCardIsVisible: (e: boolean) => void;
  setSelectedCardValue: (e: string) => void;
}

export const CommonArea: React.FC<ICommonArea> = (
  {isCardVisible, 
   selectedCardValue, 
   setSelectedCardValue, 
   setIsCardIsVisible, 
  }) => {
  return (
    <section>
      <Table 
        isCardVisible={isCardVisible}
        setIsCardIsVisible={setIsCardIsVisible}
        setSelectedCardValue={setSelectedCardValue}
        selectedCardValue={selectedCardValue}
      />
      <CardNest 
        isCardVisible={isCardVisible}
        selectedCardValue={selectedCardValue}
      />
    </section>
  )
}

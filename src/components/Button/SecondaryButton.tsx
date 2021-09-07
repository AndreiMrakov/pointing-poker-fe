import React, { FC } from "react";
import { Button } from "./Button";

type SecondaryButtonProps = {
  name: string;
  onClick: () => void;
};

export const SecondaryButton: FC<SecondaryButtonProps> = ({ name, onClick }) => {
  return (
    <Button name={name} myStyles="btn-secondary" onClick={onClick} />
  );
};

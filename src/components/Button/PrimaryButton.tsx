import React, { FC } from "react";
import { Button } from "./Button";

type PrimaryButtonProps = {
  name: string;
  onClick: () => void;
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({ name, onClick }) => {
  return (
    <Button name={name} myStyles="btn-primary" onClick={onClick} />
  );
};

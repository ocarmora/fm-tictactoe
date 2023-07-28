import { FC } from "react";
import { SquareProps } from "./Square.types";

export const Square: FC<SquareProps> = ({ onClick, children, className }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

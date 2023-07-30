import { FC } from "react";
import { CrossIcon } from "../Icons";
import { CircleIcon } from "../Icons/CircleIcon";
import { TurnProps } from "./Turn.types";

export const Turn: FC<TurnProps> = ({ mark }) => {
  return (
    <div className="TicTacToe__turn">
      {mark === "cross" && <CrossIcon fill="#A8BFC9" width={20} height={20} />}
      {mark === "circle" && (
        <CircleIcon fill="#A8BFC9" width={20} height={20} />
      )}
      Turn
    </div>
  );
};

import { FC } from "react";
import { ResetIcon } from "../Icons";

export type ResetButtonProps = {
  onClick: () => unknown;
};

export const ResetButton: FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button className="TicTacToe__reset-button" onClick={onClick}>
      <ResetIcon width={20} height={20} fill="#1F3641" />
    </button>
  );
};

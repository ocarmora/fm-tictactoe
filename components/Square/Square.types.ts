import { MouseEventHandler, ReactNode } from "react";

export type SquareProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
  className?: string;
};

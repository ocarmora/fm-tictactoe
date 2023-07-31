import { FC } from "react";

export type ResultProps = {
  className?: string;
  title: string;
  value: string;
};

export const Result: FC<ResultProps> = ({ title, value, className }) => {
  return (
    <div className={className}>
      {title} <span>{value}</span>
    </div>
  );
};

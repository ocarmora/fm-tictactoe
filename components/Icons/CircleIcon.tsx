import { FC, SVGProps } from "react";

export const CircleIcon: FC<SVGProps<SVGElement>> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10zM5.926 10a4.074 4.074 0 118.148 0 4.074 4.074 0 01-8.148 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

import { FC, SVGProps } from "react";

export const CrossIcon: FC<SVGProps<SVGElement>> = ({
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
        d="M19.723 3.306l-3.03-3.03a.945.945 0 00-1.336 0L10 5.635 4.643.277a.945.945 0 00-1.337 0l-3.03 3.03a.945.945 0 000 1.336L5.635 10 .277 15.357a.945.945 0 000 1.337l3.03 3.03c.368.368.967.368 1.336 0L10 14.365l5.357 5.357c.37.37.968.37 1.337 0l3.03-3.03a.945.945 0 000-1.336L14.365 10l5.357-5.357a.945.945 0 000-1.337z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

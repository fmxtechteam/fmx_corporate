export const ScrollLeft = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: (...any: any[]) => void;
}) => {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect
        x="-0.5"
        y="0.5"
        width={63}
        height={63}
        rx="7.5"
        transform="matrix(-1 0 0 1 63 0)"
        stroke="#35AC0B"
      />
      <path
        d="M30.9094 39L31.8937 38.0284L27.8412 33.9759H38.3369V32.5696H27.8412L31.8937 28.5298L30.9094 27.5455L25.1821 33.2727L30.9094 39Z"
        fill="#35AC0B"
      />
    </svg>
  );
};

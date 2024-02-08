export const ScrollRight = ({
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
      <rect x="0.5" y="0.5" width={63} height={63} rx="7.5" stroke="#35AC0B" />
      <path
        d="M33.0906 39L32.1063 38.0284L36.1588 33.9759H25.6631V32.5696H36.1588L32.1063 28.5298L33.0906 27.5455L38.8179 33.2727L33.0906 39Z"
        fill="#35AC0B"
      />
    </svg>
  );
};

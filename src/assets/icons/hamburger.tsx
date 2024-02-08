export const Hamburger = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: (...any: any[]) => void;
}) => {
  return (
    <svg
      onClick={onClick}
      width={24}
      height={14}
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width={24} height={2} rx={1} fill="#020900" />
      <rect y={6} width={24} height={2} rx={1} fill="#020900" />
      <rect y={12} width={24} height={2} rx={1} fill="#020900" />
    </svg>
  );
};

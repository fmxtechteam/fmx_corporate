export const GlobalVision = ({ className }: { className?: string }) => {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width={60} height={60} rx={8} fill="#FDFFFF" />
      <path
        d="M17 30H43M17 30C17 37.1797 22.8203 43 30 43M17 30C17 22.8203 22.8203 17 30 17M43 30C43 37.1797 37.1797 43 30 43M43 30C43 22.8203 37.1797 17 30 17M30 17C33.2517 20.5599 35.0996 25.1796 35.2 30C35.0996 34.8204 33.2517 39.4401 30 43M30 17C26.7483 20.5599 24.9004 25.1796 24.8 30C24.9004 34.8204 26.7483 39.4401 30 43"
        stroke="#07396B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

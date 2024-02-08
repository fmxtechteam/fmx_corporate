export const OnlineOrdering = ({ className }: { className?: string }) => {
  return (
    <svg
      width={78}
      height={78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_425_2812)">
        <rect x={9} y={5} width={60} height={60} rx={8} fill="#FDFFFF" />
      </g>
      <path
        d="M50.513 39.8626C49.7178 41.7432 48.474 43.4004 46.8904 44.6892C45.3067 45.9781 43.4315 46.8594 41.4286 47.2561C39.4256 47.6528 37.356 47.5528 35.4007 46.9648C33.4453 46.3769 31.6638 45.3189 30.2118 43.8834C28.7598 42.4479 27.6815 40.6785 27.0713 38.73C26.4611 36.7815 26.3375 34.7132 26.7113 32.7059C27.085 30.6986 27.9449 28.8134 29.2156 27.2151C30.4862 25.6169 32.1291 24.3542 34.0005 23.5376"
        stroke="#05376A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.5 35C51.5 33.3585 51.1767 31.733 50.5485 30.2165C49.9203 28.6999 48.9996 27.3219 47.8388 26.1612C46.6781 25.0004 45.3001 24.0797 43.7835 23.4515C42.267 22.8233 40.6415 22.5 39 22.5V35H51.5Z"
        stroke="#05376A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_425_2812"
          x={0}
          y={0}
          width={78}
          height={78}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_425_2812"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_425_2812"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

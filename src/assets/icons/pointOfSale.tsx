export const PointOfSale = ({ className }: { className?: string }) => {
  return (
    <svg
      width={78}
      height={78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_425_2810)">
        <rect x={9} y={5} width={60} height={60} rx={8} fill="white" />
      </g>
      <rect
        x={24}
        y="19.9995"
        width={30}
        height={30}
        rx={4}
        stroke="#05376A"
        strokeWidth={2}
      />
      <rect x={29} y="24.9995" width={19} height={2} rx={1} fill="#05376A" />
      <rect x={33} y="29.9995" width={15} height={2} rx={1} fill="#05376A" />
      <rect x={29} y="29.9995" width={3} height={2} rx={1} fill="#05376A" />
      <rect x={29} y="33.9995" width={3} height={2} rx={1} fill="#05376A" />
      <rect x={33} y="33.9995" width={15} height={2} rx={1} fill="#05376A" />
      <rect x={37} y="42.9995" width={10} height={2} rx={1} fill="#05376A" />
      <defs>
        <filter
          id="filter0_d_425_2810"
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
            result="effect1_dropShadow_425_2810"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_425_2810"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const Transportation = ({ className }: { className?: string }) => {
  return (
    <svg
      width={65}
      height={64}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_479_1236)">
        <rect x="4.33398" width={56} height={56} rx={12} fill="#F3FBF3" />
        <path
          d="M36.4013 24H23.6673C21.8264 24 20.334 22.5076 20.334 20.6667C20.334 18.8257 21.8264 17.3333 23.6673 17.3333H36.4013M28.2666 38.6667H41.0007C42.8416 38.6667 44.334 37.1743 44.334 35.3333C44.334 33.4924 42.8416 32 41.0007 32H28.2666M20.334 35.3333C20.334 37.9107 22.4233 40 25.0007 40C27.578 40 29.6673 37.9107 29.6673 35.3333C29.6673 32.756 27.578 30.6667 25.0007 30.6667C22.4233 30.6667 20.334 32.756 20.334 35.3333ZM44.334 20.6667C44.334 23.244 42.2446 25.3333 39.6673 25.3333C37.09 25.3333 35.0007 23.244 35.0007 20.6667C35.0007 18.0893 37.09 16 39.6673 16C42.2446 16 44.334 18.0893 44.334 20.6667Z"
          stroke="#35AC0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_479_1236"
          x="0.333984"
          y={0}
          width={64}
          height={64}
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
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_479_1236"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_479_1236"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

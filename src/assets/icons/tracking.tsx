export const Tracking = ({ className }: { className?: string }) => {
  return (
    <svg
      width={65}
      height={64}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d_479_1232)">
        <rect x="4.66602" width={56} height={56} rx={8} fill="#F3FBF3" />
        <path
          d="M28.666 28H22.7993C22.0526 28 21.6792 28 21.394 28.1453C21.1431 28.2732 20.9392 28.4771 20.8113 28.728C20.666 29.0132 20.666 29.3866 20.666 30.1333V37.8667C20.666 38.6134 20.666 38.9868 20.8113 39.272C20.9392 39.5229 21.1431 39.7268 21.394 39.8547C21.6792 40 22.0526 40 22.7993 40H28.666M28.666 40H36.666M28.666 40L28.666 23.4667C28.666 22.7199 28.666 22.3466 28.8113 22.0613C28.9392 21.8105 29.1431 21.6065 29.394 21.4787C29.6792 21.3333 30.0526 21.3333 30.7993 21.3333H34.5327C35.2794 21.3333 35.6528 21.3333 35.938 21.4787C36.1889 21.6065 36.3929 21.8105 36.5207 22.0613C36.666 22.3466 36.666 22.7199 36.666 23.4667V40M36.666 40H42.5327C43.2794 40 43.6528 40 43.938 39.8547C44.1889 39.7268 44.3929 39.5229 44.5207 39.272C44.666 38.9868 44.666 38.6134 44.666 37.8667V18.1333C44.666 17.3866 44.666 17.0132 44.5207 16.728C44.3929 16.4771 44.1889 16.2732 43.938 16.1453C43.6528 16 43.2794 16 42.5327 16H38.7993C38.0526 16 37.6792 16 37.394 16.1453C37.1431 16.2732 36.9392 16.4771 36.8113 16.728C36.666 17.0132 36.666 17.3866 36.666 18.1333V22.6667"
          stroke="#35AC0B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_479_1232"
          x="0.666016"
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
            result="effect1_dropShadow_479_1232"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_479_1232"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

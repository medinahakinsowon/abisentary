export default function RadarMap() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle cx="210" cy="230" r="190" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="230" r="140" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="230" r="90" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="230" r="40" stroke="#26365c" strokeWidth="1" />
        <line
          x1="20"
          y1="230"
          x2="400"
          y2="230"
          stroke="#1c2745"
          strokeWidth="1"
        />
        <line
          x1="210"
          y1="40"
          x2="210"
          y2="420"
          stroke="#1c2745"
          strokeWidth="1"
        />

        {/* simplified Africa continent outline */}
        <path
          d="M215 95 L245 100 L262 120 L268 145 L285 160 L292 185 L280 205 L282 230 L270 255 L272 280 L258 305 L245 330 L230 350 L222 330 L210 320 L205 295 L188 280 L180 255 L165 240 L160 215 L170 190 L165 165 L178 145 L175 120 L192 105 Z"
          fill="rgba(21,93,252,0.10)"
          stroke="#4B83FF"
          strokeWidth="1.4"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* monitored nodes */}
        <circle
          className="animate-blip [animation-delay:0.2s]"
          cx="225"
          cy="150"
          r="4"
          fill="#4B83FF"
        />
        <circle
          className="animate-blip [animation-delay:1.1s]"
          cx="200"
          cy="210"
          r="4"
          fill="#4B83FF"
        />
        <circle
          className="animate-blip [animation-delay:1.9s]"
          cx="245"
          cy="260"
          r="4"
          fill="#FFB020"
        />
        <circle
          className="animate-blip [animation-delay:0.7s]"
          cx="215"
          cy="300"
          r="4"
          fill="#4B83FF"
        />
        <circle
          className="animate-blip [animation-delay:2.4s]"
          cx="185"
          cy="180"
          r="4"
          fill="#4B83FF"
        />

        <g className="origin-[210px_230px] animate-sweep">
          <defs>
            <linearGradient
              id="sweepGrad"
              x1="210"
              y1="230"
              x2="210"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#155DFC" stopOpacity="0.5" />
              <stop offset="1" stopColor="#155DFC" stopOpacity="0" />
            </linearGradient>
            <clipPath id="sweepClip">
              <circle cx="210" cy="230" r="190" />
            </clipPath>
          </defs>
          <path
            d="M210 230 L210 20 A190 190 0 0 1 265 35 Z"
            fill="url(#sweepGrad)"
            clipPath="url(#sweepClip)"
          />
          <line
            x1="210"
            y1="230"
            x2="210"
            y2="40"
            stroke="#4B83FF"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

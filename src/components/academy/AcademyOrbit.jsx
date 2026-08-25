export default function AcademyOrbit() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#155DFC" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#155DFC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="210" cy="210" r="180" fill="url(#orbitGlow)" />

        {/* Broadcast rings — radiate outward, staggered */}
        <circle
          cx="210"
          cy="210"
          r="70"
          stroke="#4B83FF"
          strokeWidth="1.3"
          opacity="0.7"
        >
          <animate
            attributeName="r"
            values="60;170"
            dur="3.5s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0"
            dur="3.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="210"
          cy="210"
          r="70"
          stroke="#4B83FF"
          strokeWidth="1.3"
          opacity="0.7"
        >
          <animate
            attributeName="r"
            values="60;170"
            dur="3.5s"
            begin="1.15s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0"
            dur="3.5s"
            begin="1.15s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="210"
          cy="210"
          r="70"
          stroke="#4B83FF"
          strokeWidth="1.3"
          opacity="0.7"
        >
          <animate
            attributeName="r"
            values="60;170"
            dur="3.5s"
            begin="2.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;0"
            dur="3.5s"
            begin="2.3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Static reference rings */}
        <circle cx="210" cy="210" r="180" stroke="#26365c" strokeWidth="1" />
        <circle cx="210" cy="210" r="130" stroke="#26365c" strokeWidth="1" />

        {/* Orbiting skill nodes */}
        <g
          className="origin-[210px_210px] animate-sweep"
          style={{ animationDuration: "22s" }}
        >
          <circle cx="210" cy="30" r="5" fill="#4B83FF" />
        </g>
        <g
          className="origin-[210px_210px] animate-sweep"
          style={{ animationDuration: "16s", animationDirection: "reverse" }}
        >
          <circle cx="210" cy="80" r="4.5" fill="#FFB020" />
        </g>
        <g
          className="origin-[210px_210px] animate-sweep"
          style={{ animationDuration: "28s" }}
        >
          <circle cx="390" cy="210" r="4" fill="#4B83FF" />
        </g>

        {/* Center certification badge */}
        <circle
          cx="210"
          cy="210"
          r="52"
          fill="#121a30"
          stroke="#155DFC"
          strokeWidth="1.5"
        />
        <path
          d="M210 185L226 193V206C226 217 219.5 226 210 230C200.5 226 194 217 194 206V193L210 185Z"
          stroke="#4B83FF"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M202 207L207.5 212.5L219 200"
          stroke="#4B83FF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

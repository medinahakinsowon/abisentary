const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="mt-0.5 flex-shrink-0 text-signal-blue-bright"
  >
    <path
      d="M3 8.5L6.5 12L13 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceDetail({
  index,
  title,
  body,
  points,
  visual,
  reverse = false,
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 border-b border-perimeter-soft py-14 first:pt-0 last:border-none md:grid-cols-2 md:gap-14 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue-bright before:content-[''] before:h-px before:w-5 before:bg-signal-blue-bright">
          Capability / {index}
        </span>
        <h2 className="text-2xl">{title}</h2>
        <p>{body}</p>
        <ul className="mt-5 flex flex-col gap-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-[14.5px] text-paper-dim"
            >
              <Check />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-perimeter bg-gradient-to-br from-deep-steel-2 to-void-navy p-8">
        {visual}
      </div>
    </div>
  );
}

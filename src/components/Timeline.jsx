export default function Timeline({ items }) {
  return (
    <div className="border-l border-perimeter pl-8">
      {items.map((item, i) => (
        <div
          key={item.year}
          className={`relative pb-11 ${i === items.length - 1 ? "pb-0" : ""}`}
        >
          <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-signal-blue bg-void-navy" />
          <span className="mb-1.5 block font-mono text-[13px] text-signal-blue-bright">
            {item.year}
          </span>
          <h3 className="text-[17px]">{item.title}</h3>
          <p className="mb-0 text-[14.5px]">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

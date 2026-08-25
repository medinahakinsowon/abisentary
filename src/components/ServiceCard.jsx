export default function ServiceCard({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-perimeter bg-gradient-to-b from-deep-steel-2 to-deep-steel p-7 transition duration-250 hover:-translate-y-1 hover:border-signal-blue-dim">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-signal-blue/30 bg-signal-blue/[0.12] text-signal-blue-bright">
        {icon}
      </div>
      <h1 className="mb-2.5 text-[30px] font-bold">{title}</h1>
      <p className="mb-0 text-[14.5px]">{children}</p>
    </div>
  );
}

export default function StatusChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-signal-blue/35 bg-signal-blue px-4 py-2 text-xs uppercase tracking-wider text-deep-steel font-bold mb-5">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-pulsedot rounded-full bg-success-green" />
      </span>
      {children}
    </span>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="mb-3.5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-signal-blue before:content-[''] before:h-px before:w-5 before:bg-signal-blue-bright">
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  center = false,
  className = "",
  span,
}) {
  return (
    <div
      className={`mb-14 max-w-xl ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[28px] sm:text-[32px] lg:text-[35px] lg:font-bold mb-3">{title}</h2>
      {body && <p className="mb-0 text-[17px]">{body}</p>}
    </div>
  );
}

export function PageHeader({ status, title, body, span }) {
  return (
    <section className="px-8 pb-6 pt-14">
      <div className="mx-auto max-w-content ">
        {status}
        <h1 className="mt-4.5 max-w-2xl text-[32px] sm:text-[43px] font-bold">{title}</h1>
        <p className="mb-0 max-w-lg text-[17px]">{body} <span className="font-bold">{span}</span></p>
      </div>
    </section>
  );
}

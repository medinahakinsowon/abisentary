
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ItemLink({ item, onNavigate, className }) {
  const content = (
    <>
      {item.icon && (
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-signal-blue bg-signal-blue/[0.1] text-signal-blue">
          {item.icon}
        </span>
      )}
      <span>
        <span className="block text-sm font-medium text-paper">{item.title}</span>
        {item.description && <span className="mt-0.5 block text-xs text-paper-faint">{item.description}</span>}
      </span>
    </>
  );

  if (item.to) {
    return (
      <Link to={item.to} onClick={onNavigate} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onNavigate} className={className}>
      {content}
    </a>
  );
}

export default function NavDropdown({ menu, open, onToggle, onClose }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onClose();
    }
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  const itemClass = "flex items-start gap-3 rounded-md px-3 py-2.5 transition hover:bg-signal-blue/[0.08]";
  const footerClass = "flex items-center gap-1.5 text-xs font-semibold text-signal-blue hover:text-signal-blue-bright/80";

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex items-center gap-1.5 py-1 text-sm font-medium text-paper-dim transition-colors hover:text-paper"
      >
        {menu.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2 pt-4 transition-all duration-150 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="rounded-xl border border-perimeter bg-deep-steel-2 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
          <div className="grid gap-0.5">
            {menu.items.map((item) => (
              <ItemLink key={item.title} item={item} onNavigate={onClose} className={itemClass} />
            ))}
          </div>
          {menu.footerLink && (
            <div className="mt-2 border-t border-perimeter-soft px-3 pt-3">
              {menu.footerLink.to ? (
                <Link to={menu.footerLink.to} onClick={onClose} className={footerClass}>
                  {menu.footerLink.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ) : (
                <a href={menu.footerLink.href} onClick={onClose} className={footerClass}>
                  {menu.footerLink.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

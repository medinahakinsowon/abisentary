import { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import { navMenu } from "../data/navMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const openNow = (label) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-perimeter-soft bg-void-navy/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-8 py-7">
        <Logo />

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navMenu.map((menu) => (
            <li
              key={menu.label}
              onMouseEnter={() => openNow(menu.label)}
              onMouseLeave={closeSoon}
            >
              <NavDropdown
                menu={menu}
                open={openMenu === menu.label}
                onToggle={() =>
                  setOpenMenu((cur) => (cur === menu.label ? null : menu.label))
                }
                onClose={closeNow}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-5 py-2.5 text-sm font-semibold text-deep-steel shadow-[0_0_0_1px_rgba(21,93,252,0.4),0_8px_24px_-8px_rgba(21,93,252,0.6)] transition hover:-translate-y-px hover:bg-signal-blue-bright"
          >
            Book a Call
          </NavLink>
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center rounded-md border border-perimeter p-2 text-paper md:hidden"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu: accordion of the same nav data */}
      <div
        className={`overflow-y-auto border-b border-perimeter-soft bg-void-navy transition-[max-height] duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-[calc(100vh-92px)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-8 py-4">
          {navMenu.map((menu) => {
            const expanded = mobileExpanded === menu.label;
            return (
              <li
                key={menu.label}
                className="border-b border-perimeter-soft last:border-none"
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(expanded ? null : menu.label)
                  }
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between py-3.5 text-left text-sm font-medium text-paper"
                >
                  {menu.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-200 ${expanded ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="flex flex-col gap-0.5 pl-1">
                      {menu.items.map((item) =>
                        item.to ? (
                          <Link
                            key={item.title}
                            to={item.to}
                            onClick={closeMobile}
                            className="rounded-md px-3 py-2 text-sm text-paper-dim transition hover:bg-signal-blue/[0.08] hover:text-paper"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={closeMobile}
                            className="rounded-md px-3 py-2 text-sm text-paper-dim transition hover:bg-signal-blue/[0.08] hover:text-paper"
                          >
                            {item.title}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3 px-8 pb-6 pt-2 sm:hidden">
          <Link
            to="/contact"
            onClick={closeMobile}
            className="flex-1 rounded bg-signal-blue px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}

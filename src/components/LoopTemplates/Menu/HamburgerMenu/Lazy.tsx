/**
 * LazyHamburgerMenu
 * Loads on first click, manages open/close toggle state
 */

import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";

interface ContentProps {
  items: any[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  closeButton?: boolean;
}

interface Props {
  items: any[];
  buttonId?: string;
  className?: string;
  closeButton?: boolean;
}

export default function LazyHamburgerMenu({
  items,
  buttonId = "mobile-menu-toggle",
  className = "",
  closeButton = false,
}: Props) {
  const [Component, setComponent] = useState<ComponentType<ContentProps> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const started = useRef(false);

  const close = useCallback(() => {
    setIsOpen(false);
    document.getElementById(buttonId)?.setAttribute("aria-expanded", "false");
  }, [buttonId]);

  useEffect(() => {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    const onClick = () => {
      if (!started.current) {
        started.current = true;
        import("./HamburgerMenuContent").then((m) => {
          setComponent(() => m.default);
          setIsOpen(true);
          btn.setAttribute("aria-expanded", "true");
        });
      } else {
        setIsOpen((prev) => {
          const next = !prev;
          btn.setAttribute("aria-expanded", String(next));
          return next;
        });
      }
    };

    btn.addEventListener("click", onClick);
    return () => btn.removeEventListener("click", onClick);
  }, [buttonId]);

  if (!Component) return null;

  return (
    <Component
      items={items}
      isOpen={isOpen}
      onClose={close}
      className={className}
      closeButton={closeButton}
    />
  );
}

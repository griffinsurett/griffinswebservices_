/**
 * LazyHamburgerMenu - Uses global LazyLoader with toggle trigger
 *
 * Lazy-loads the menu content only when the hamburger button is clicked.
 * LazyLoader handles the toggle state and passes isOpen/onClose to the content.
 */

import LazyLoader, { type ToggleInjectedProps } from "@/components/LazyLoader";

interface HamburgerMenuContentProps extends ToggleInjectedProps {
  items: any[];
  className?: string;
  closeButton?: boolean;
}

interface LazyHamburgerMenuProps {
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
}: LazyHamburgerMenuProps) {
  return (
    <LazyLoader<HamburgerMenuContentProps>
      component={() => import("./HamburgerMenuContent")}
      trigger="toggle"
      triggerId={buttonId}
      props={{ items, className, closeButton }}
    />
  );
}

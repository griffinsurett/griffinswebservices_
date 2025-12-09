import { jsx, jsxs } from 'react/jsx-runtime';
import { memo, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

let portalRoot = null;
function getPortalRoot() {
  if (portalRoot) return portalRoot;
  if (typeof document === "undefined") {
    return null;
  }
  portalRoot = document.body;
  return portalRoot;
}
const POSITION_CLASSES = {
  center: "flex items-center justify-center",
  "bottom-left": "flex items-end justify-start p-4",
  "bottom-right": "flex items-end justify-end p-4",
  "top-left": "flex items-start justify-start p-4",
  "top-right": "flex items-start justify-end p-4"
};
function Modal({
  isOpen,
  onClose,
  children,
  closeButton = true,
  closeButtonClass = "absolute top-4 right-4",
  overlayClass = "bg-black bg-opacity-50",
  className = "bg-bg shadow-xl p-6 rounded-lg max-w-lg w-full mx-4",
  allowScroll = false,
  ariaLabel,
  ariaDescribedBy,
  position = "center",
  ssr = true
}) {
  const [mounted, setMounted] = useState(ssr ? isOpen : false);
  const modalRef = useRef(null);
  useEffect(() => {
    if (!ssr && !mounted) {
      setMounted(true);
    }
  }, [ssr, mounted]);
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);
  useEffect(() => {
    if (!mounted || !isOpen || allowScroll) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [mounted, isOpen, allowScroll]);
  useEffect(() => {
    if (!mounted || !isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown, { passive: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, isOpen, onClose]);
  const handleAnimationEnd = () => {
    if (!isOpen) {
      setMounted(false);
    }
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const modalPointerEventsClass = isOpen ? "pointer-events-auto" : "pointer-events-none";
  if (!ssr && !mounted) return null;
  if (!mounted) return null;
  const root = getPortalRoot();
  if (!root) return null;
  return createPortal(
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed inset-0 z-[9999] ${POSITION_CLASSES[position]} ${overlayClass} transform transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        onClick: handleOverlayClick,
        onTransitionEnd: handleAnimationEnd,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": ariaLabel,
        "aria-describedby": ariaDescribedBy,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            ref: modalRef,
            className: `relative ${className} ${modalPointerEventsClass} transform-gpu transition-all duration-300 ease-in-out origin-center ${isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`,
            onClick: handleModalClick,
            tabIndex: -1,
            children: [
              closeButton && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: closeButtonClass,
                  "aria-label": "Close modal",
                  type: "button",
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-6 h-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          d: "M18 6L6 18M6 6l12 12",
                          stroke: "currentColor",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                }
              ),
              children
            ]
          }
        )
      }
    ),
    root
  );
}
const Modal$1 = memo(Modal);

export { Modal$1 as M };

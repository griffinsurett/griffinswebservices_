import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { M as Modal } from './Modal_3dnSatJ6.mjs';
import { B as Button, I as Icon } from './accordion_Dx6odBLx.mjs';

function MobileMenuItem({
  title,
  url,
  children = [],
  openInNewTab = false,
  onNavigate,
  onOpenSubmenu
}) {
  const hasChildren = children.length > 0;
  const openSubmenu = () => {
    if (!hasChildren) return;
    onOpenSubmenu?.({ title, items: children });
  };
  const handleParentClick = () => {
    if (url) {
      onNavigate();
      return;
    }
    openSubmenu();
  };
  if (hasChildren) {
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "menuItemButton",
          className: "hover-emphasis-text inline-flex items-center gap-2 text-left",
          onClick: handleParentClick,
          ...url ? {
            href: url,
            target: openInNewTab ? "_blank" : void 0,
            rel: openInNewTab ? "noopener noreferrer" : void 0
          } : { type: "button" },
          children: title
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: openSubmenu,
          "aria-label": `View submenu for ${title}`,
          className: "text-text",
          children: /* @__PURE__ */ jsx(
            Icon,
            {
              icon: "lu:chevron-right",
              size: "md",
              className: "w-6 h-6"
            }
          )
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    Button,
    {
      variant: "menuItemButton",
      href: url || "#",
      onClick: onNavigate,
      target: openInNewTab ? "_blank" : void 0,
      rel: openInNewTab ? "noopener noreferrer" : void 0,
      className: "hover-emphasis-text",
      children: title
    }
  ) });
}

function HamburgerMenuContent({
  items,
  isOpen,
  onClose,
  className = "",
  closeButton = false
}) {
  const [menuStack, setMenuStack] = useState(() => [
    { title: "Main Menu", items }
  ]);
  const resetMenuStack = useCallback(() => {
    setMenuStack([{ title: "Main Menu", items }]);
  }, [items]);
  useEffect(() => {
    resetMenuStack();
  }, [resetMenuStack]);
  useEffect(() => {
    if (!isOpen) {
      resetMenuStack();
    }
  }, [isOpen, resetMenuStack]);
  const handleNavigate = () => {
    onClose();
  };
  const handleOpenSubmenu = (title, nextItems) => {
    if (!nextItems?.length) {
      return;
    }
    setMenuStack((prev) => [...prev, { title, items: nextItems }]);
  };
  const handleBack = () => {
    setMenuStack((prev) => prev.length > 1 ? prev.slice(0, -1) : prev);
  };
  const slideOffset = (menuStack.length - 1) * 100;
  return /* @__PURE__ */ jsx(
    Modal,
    {
      isOpen,
      onClose,
      position: "center",
      className: `w-full max-w-full h-full hero-gradient-bg p-0 rounded-none transform transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"}`,
      overlayClass: `bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`,
      closeButton,
      ariaLabel: "Mobile navigation menu",
      ssr: false,
      children: /* @__PURE__ */ jsx(
        "nav",
        {
          className: `${className} h-full w-full flex flex-col justify-center overflow-hidden`,
          "aria-label": "Mobile navigation",
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "inner-section my-auto py-4",
              style: { maxHeight: "calc(100vh - 6rem)" },
              children: /* @__PURE__ */ jsx("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex h-full transition-transform duration-300 ease-in-out",
                  style: { transform: `translateX(-${slideOffset}%)` },
                  children: menuStack.map((level, index) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "w-full flex-shrink-0 h-full flex flex-col relative",
                      "aria-hidden": index !== menuStack.length - 1,
                      children: [
                        index > 0 && /* @__PURE__ */ jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: handleBack,
                            className: "flex items-center gap-2 text-text hover:underline absolute left-0 top-0",
                            "aria-label": `Go back to ${menuStack[index - 1]?.title ?? "previous menu"}`,
                            children: [
                              /* @__PURE__ */ jsx(
                                "svg",
                                {
                                  className: "w-5 h-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  "aria-hidden": "true",
                                  children: /* @__PURE__ */ jsx(
                                    "path",
                                    {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M15 19l-7-7 7-7"
                                    }
                                  )
                                }
                              ),
                              "Back"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `flex-1 overflow-y-auto overflow-x-hidden pr-2 ${index > 0 ? "pt-12" : ""}`,
                            children: /* @__PURE__ */ jsx("ul", { className: "menu-item-spacing pb-10", children: level.items.map((item) => /* @__PURE__ */ jsx(
                              MobileMenuItem,
                              {
                                ...item,
                                onNavigate: handleNavigate,
                                onOpenSubmenu: (submenu) => handleOpenSubmenu(submenu.title, submenu.items)
                              },
                              item.slug || item.id
                            )) })
                          }
                        )
                      ]
                    },
                    `${level.title}-${index}`
                  ))
                }
              ) })
            }
          )
        }
      )
    }
  );
}

export { HamburgerMenuContent as default };

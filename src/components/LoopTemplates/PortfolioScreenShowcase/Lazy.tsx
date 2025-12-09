/**
 * LazyPortfolioShowcase
 * Loads after 3s delay
 */

import { useEffect, useRef, useState, type ComponentType } from "react";

interface Props {
  items: any[];
  mediaEntries?: any[];
  className?: string;
  staticContainerId?: string;
}

export default function LazyPortfolioShowcase(props: Props) {
  const [Component, setComponent] = useState<ComponentType<Props> | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;

    const id = setTimeout(() => {
      started.current = true;
      import("./PortfolioScreenShowcase").then((m) => setComponent(() => m.default));
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  return Component ? <Component {...props} /> : null;
}

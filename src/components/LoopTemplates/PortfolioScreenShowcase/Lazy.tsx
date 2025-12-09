import LazyLoader from "@/components/LazyLoader";

interface Props {
  items: any[];
  mediaEntries?: any[];
  className?: string;
  staticContainerId?: string;
}

export default function LazyPortfolioShowcase(props: Props) {
  return (
    <LazyLoader
      component={() => import("./PortfolioScreenShowcase")}
      props={props}
      delay={3000}
    />
  );
}

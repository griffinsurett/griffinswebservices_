import Icon from "@/components/Icon";
import { ButtonBase, type ButtonProps } from "../Button";

export default function ArrowLinkButton({
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      className={`group flex items-center justify-between gap-4 text-left cursor-pointer ${className}`.trim()}
      unstyled
    >
      <span className="flex justify-center items-center rounded-full h-10 w-10 bg-accent">   
        <Icon icon="lu:arrow-right" size="lg" className="text-bg transition-transform duration-300 group-hover:translate-x-0.5 p-0" />
        </span>   
    </ButtonBase>
  );
}

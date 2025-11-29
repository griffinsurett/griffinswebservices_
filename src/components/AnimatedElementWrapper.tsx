// src/components/AnimatedElementWrapper.tsx
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { useAnimatedElement } from "@/hooks/animations/useViewAnimation";

type VariantProp = string | string[];

type BaseProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  variant?: VariantProp;
  animationDuration?: number;
  animationDelay?: number;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
  onReverse?: () => void;
} & ComponentPropsWithoutRef<any>;

const AnimatedElementWrapper = forwardRef<HTMLElement, BaseProps>(function AnimatedElementWrapper(
  {
    as,
    children,
    className = "",
    variant = "fade-in",
    animationDuration = 600,
    animationDelay = 0,
    easing = "cubic-bezier(0.4, 0, 0.2, 1)",
    threshold = 0.2,
    rootMargin = "0px 0px -50px 0px",
    once = false,
    onStart,
    onComplete,
    onReverse,
    style,
    ...rest
  }: BaseProps,
  _ref,
) {
  const Component = (as || "div") as ElementType;

  const anim = useAnimatedElement({
    duration: animationDuration,
    delay: animationDelay,
    easing,
    threshold,
    rootMargin,
    once,
    onStart,
    onComplete,
    onReverse,
  });

  const variantClasses = Array.isArray(variant)
    ? variant.filter(Boolean).join(" ")
    : String(variant || "");

  const mergedStyle = { ...anim.style, ...style };

  return (
    <Component
      ref={anim.ref}
      className={`animated-element ${variantClasses} ${className}`.trim()}
      {...rest}
      {...anim.props}
      style={mergedStyle}
    >
      {children}
    </Component>
  );
});

export default AnimatedElementWrapper;

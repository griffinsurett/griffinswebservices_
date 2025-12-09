import { useCallback, useEffect, useRef, useState } from "react";
import { getImageSrc } from "@/layouts/collections/helpers/layoutHelpers";
import type { PortfolioItemData } from "@/components/LoopComponents/PortfolioItemComponent";

interface PortfolioMediaEntry {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  srcSet?: string;
  sizes?: string;
  sources?: { type?: string; srcSet: string; sizes?: string }[];
  loading?: "eager" | "lazy";
  decoding?: "sync" | "async";
  fetchPriority?: "high" | "low" | "auto";
  desktopEager?: boolean;
}

interface PortfolioScreenShowcaseProps {
  items?: PortfolioItemData[];
  className?: string;
  mediaEntries?: (PortfolioMediaEntry | undefined)[];
  staticContainerId?: string;
  carouselContainerId?: string;
}

// Minimal autoscroll - single RAF loop, no external hooks
function useSimpleAutoScroll(
  ref: React.RefObject<HTMLElement | null>,
  active: boolean,
  onComplete: () => void
) {
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(0);
  const scrollStartRef = useRef(0);

  useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Reset scroll position for new slide
    el.scrollTop = 0;
    scrollStartRef.current = 0;

    const SCROLL_SPEED = 35; // px/sec
    const START_DELAY = 800;
    const END_PAUSE = 400;

    let started = false;
    let completed = false;

    const animate = (timestamp: number) => {
      if (!started) {
        startTimeRef.current = timestamp;
        started = true;
      }

      const elapsed = timestamp - startTimeRef.current;

      // Delay before starting scroll
      if (elapsed < START_DELAY) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const scrollElapsed = elapsed - START_DELAY;
      const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);

      if (maxScroll <= 0) {
        // No scrollable content, wait then complete
        if (!completed && scrollElapsed > 2000) {
          completed = true;
          setTimeout(onComplete, END_PAUSE);
        } else {
          rafRef.current = requestAnimationFrame(animate);
        }
        return;
      }

      const targetScroll = Math.min(maxScroll, (scrollElapsed / 1000) * SCROLL_SPEED);
      el.scrollTop = targetScroll;

      if (targetScroll >= maxScroll - 1) {
        if (!completed) {
          completed = true;
          setTimeout(onComplete, END_PAUSE);
        }
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, ref, onComplete]);
}

// Simple visibility hook using IntersectionObserver
function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}

interface ScreenSlideProps {
  item: PortfolioItemData;
  media?: PortfolioMediaEntry;
  isActive: boolean;
  onScrollComplete: () => void;
  isFirst: boolean;
}

function ScreenSlide({ item, media, isActive, onScrollComplete, isFirst }: ScreenSlideProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useSimpleAutoScroll(viewportRef, isActive, onScrollComplete);

  const fallbackSrc =
    getImageSrc(item.featuredImage) ||
    getImageSrc(item.bannerImage) ||
    getImageSrc(item.image) ||
    "";

  const loading = isFirst ? "eager" : (media?.loading ?? "lazy");
  const fetchPriority = isFirst ? "high" : (media?.fetchPriority ?? "auto");

  return (
    <div className="relative h-full bg-bg3">
      {/* Browser chrome header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-gray-800" />
          <span className="h-3 w-3 rounded-full bg-gray-800" />
          <span className="h-3 w-3 rounded-full bg-gray-800" />
        </span>
      </div>

      {/* Scrollable viewport */}
      <figure
        ref={viewportRef}
        className="h-full overflow-y-auto overscroll-contain bg-black/40"
      >
        {media?.sources?.length ? (
          <picture>
            {media.sources.map((source, idx) => (
              <source
                key={idx}
                srcSet={source.srcSet}
                sizes={source.sizes ?? media.sizes}
                type={source.type}
              />
            ))}
            <img
              src={media.src}
              srcSet={media.srcSet}
              sizes={media.sizes}
              alt={media.alt || item.title || "Project preview"}
              width={media.width}
              height={media.height}
              loading={loading}
              decoding="async"
              fetchPriority={fetchPriority}
              draggable={false}
              className="block h-auto min-h-full w-full select-none object-cover object-top"
            />
          </picture>
        ) : media?.src ? (
          <img
            src={media.src}
            srcSet={media.srcSet}
            sizes={media.sizes}
            alt={media.alt || item.title || "Project preview"}
            width={media.width}
            height={media.height}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            draggable={false}
            className="block h-auto min-h-full w-full select-none object-cover object-top"
          />
        ) : fallbackSrc ? (
          <img
            src={fallbackSrc}
            alt={item.title || "Project preview"}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            draggable={false}
            className="block h-auto min-h-full w-full select-none object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-bg2 via-bg to-bg/80 text-white/30">
            Preview coming soon
          </div>
        )}
      </figure>
    </div>
  );
}

export default function PortfolioScreenShowcase({
  items = [],
  className = "",
  mediaEntries = [],
  staticContainerId,
  carouselContainerId,
}: PortfolioScreenShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = Array.isArray(items) ? items : [];

  const inView = useInView(containerRef, 0.2);

  // Handle hydration: remove static placeholder and reveal carousel
  useEffect(() => {
    if (staticContainerId) {
      document.getElementById(staticContainerId)?.remove();
    }
    if (carouselContainerId) {
      document.getElementById(carouselContainerId)?.classList.remove("hidden");
    }
  }, [staticContainerId, carouselContainerId]);

  const goToNext = useCallback(() => {
    if (slides.length <= 1 || isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);

    // Allow transition to complete
    setTimeout(() => setIsTransitioning(false), 700);
  }, [slides.length, isTransitioning]);

  const handleScrollComplete = useCallback(() => {
    if (inView && slides.length > 1) {
      goToNext();
    }
  }, [inView, slides.length, goToNext]);

  if (!slides.length) return null;

  return (
    <div ref={containerRef} className={`relative ${className}`.trim()}>
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg h-[420px] sm:h-[500px]">
        {slides.map((item, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + slides.length) % slides.length;

          // Only render active and previous slides
          if (!isActive && !isPrev) return null;

          return (
            <div
              key={item.slug ?? item.id ?? index}
              className={`absolute inset-0 transition-transform duration-700 ease-out shadow-2xl ${
                isActive ? "translate-x-0" : "-translate-x-full"
              }`}
              aria-hidden={!isActive}
            >
              <ScreenSlide
                item={item}
                media={mediaEntries[index]}
                isActive={isActive && inView && !isTransitioning}
                onScrollComplete={handleScrollComplete}
                isFirst={index === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

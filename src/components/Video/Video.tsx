// src/components/Video/Video.tsx
/**
 * Video Component (React)
 *
 * Client-side video player with lazy loading support.
 */
import { useRef, useEffect, forwardRef } from "react";

interface VideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  lazy?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      src,
      poster,
      className = "",
      autoplay = true,
      muted = true,
      loop = true,
      controls = false,
      playsInline = true,
      lazy = true,
      onPlay,
      onPause,
      onEnded,
    },
    ref
  ) => {
    const internalRef = useRef<HTMLVideoElement>(null);
    const videoRef = (ref as React.RefObject<HTMLVideoElement>) || internalRef;

    useEffect(() => {
      const video = videoRef.current;
      if (!video || !lazy) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const dataSrc = video.dataset.videoSrc;
              if (dataSrc && video.src !== dataSrc) {
                video.src = dataSrc;
                video.load();
                if (autoplay) {
                  video.play().catch(() => {});
                }
              }
              observer.disconnect();
            }
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px 160px 0px" }
      );

      observer.observe(video);
      return () => observer.disconnect();
    }, [lazy, autoplay]);

    return (
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${className}`.trim()}
        poster={poster}
        autoPlay={!lazy && autoplay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline={playsInline}
        preload={lazy ? "metadata" : "auto"}
        data-video-src={lazy ? src : undefined}
        src={!lazy ? src : undefined}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
      />
    );
  }
);

Video.displayName = "Video";

export default Video;

const DEFAULT_IDLE_TIMEOUT = 800;

type LazyVideoShell = HTMLElement & {
  __lazyInit?: boolean;
};

function scheduleIdle(callback: () => void, timeout = DEFAULT_IDLE_TIMEOUT) {
  if (typeof window === "undefined") return;
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => callback(), { timeout });
  } else {
    window.setTimeout(callback, Math.min(timeout, 200));
  }
}

function loadVideoSources(video: HTMLVideoElement): boolean {
  if (video.dataset.videoLoaded === "true") return true;

  let updated = false;

  const directSrc = video.dataset.videoSrc;
  if (directSrc && video.src !== directSrc) {
    video.src = directSrc;
    updated = true;
  }

  video.querySelectorAll<HTMLSourceElement>("source[data-video-src]").forEach((source) => {
    const src = source.dataset.videoSrc;
    if (src && source.src !== src) {
      source.src = src;
      updated = true;
    }
  });

  if (updated) {
    video.load();
    video.dataset.videoLoaded = "true";
  }

  return updated;
}

function attemptAutoplay(video: HTMLVideoElement) {
  if (!video.autoplay) return;
  const playResult = video.play();
  if (playResult && typeof playResult.catch === "function") {
    playResult.catch(() => undefined);
  }
}

export function setupLazyVideo(root: Element | null) {
  if (!root || !(root instanceof HTMLElement)) return;
  const shell = root as LazyVideoShell;
  if (shell.__lazyInit) return;
  shell.__lazyInit = true;

  const video = shell.querySelector("video");
  if (!(video instanceof HTMLVideoElement)) return;

  const poster = shell.querySelector<HTMLElement>("[data-video-poster]");
  const trigger = shell.querySelector<HTMLElement>("[data-video-trigger]");

  const hidePoster = () => {
    poster?.setAttribute("data-hidden", "true");
    shell.dataset.videoLoaded = "true";
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const loaded = loadVideoSources(video);
          if (loaded) {
            attemptAutoplay(video);
          }
          obs.disconnect();
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px 160px 0px",
    }
  );

  observer.observe(video);

  video.addEventListener("loadeddata", hidePoster, { once: true });
  video.addEventListener("playing", () => {
    shell.dataset.videoPlaying = "true";
  });
  video.addEventListener("pause", () => {
    shell.dataset.videoPlaying = "false";
  });

  if (trigger) {
    trigger.addEventListener("click", () => {
      const didLoad = loadVideoSources(video);
      if (didLoad) {
        attemptAutoplay(video);
      } else if (video.paused) {
        attemptAutoplay(video);
      }
    });
  }
}

export function setupAllLazyVideos() {
  if (typeof document === "undefined") return;
  document.querySelectorAll("[data-video-shell]").forEach((el) => {
    setupLazyVideo(el);
  });
}

declare global {
  interface Window {
    __gwsVideoLoaderAutoInit?: boolean;
  }
}

if (typeof window !== "undefined") {
  if (!window.__gwsVideoLoaderAutoInit) {
    window.__gwsVideoLoaderAutoInit = true;
    const initAll = () => scheduleIdle(() => setupAllLazyVideos());
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAll, { once: true });
    } else {
      initAll();
    }
  }
}

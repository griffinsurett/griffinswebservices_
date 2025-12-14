export const CLIENT_CLICK_PENDING_STORE_KEY = '__GWS_CLIENT_CLICK_PENDING__';
export const CLIENT_CLICK_PENDING_EVENT = 'gws:client-click-pending';
export const CLIENT_CLICK_READY_STORE_KEY = '__GWS_CLIENT_CLICK_READY__';
export const CLIENT_CLICK_READY_EVENT = 'gws:client-click-ready';

type PendingStoreTarget = typeof globalThis & {
  [CLIENT_CLICK_PENDING_STORE_KEY]?: Map<string, number>;
  [CLIENT_CLICK_READY_STORE_KEY]?: Set<string>;
};

const getPendingStore = (): Map<string, number> => {
  const target = globalThis as PendingStoreTarget;
  if (!target[CLIENT_CLICK_PENDING_STORE_KEY]) {
    target[CLIENT_CLICK_PENDING_STORE_KEY] = new Map();
  }

  return target[CLIENT_CLICK_PENDING_STORE_KEY]!;
};

export const queuePendingClientClick = (key: string | undefined | null) => {
  if (!key) return;

  const store = getPendingStore();
  const count = store.get(key) ?? 0;
  store.set(key, count + 1);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(CLIENT_CLICK_PENDING_EVENT, {
        detail: { key },
      })
    );
  }
};

export const consumePendingClientClicks = (key: string | undefined | null): number => {
  if (!key) return 0;

  const store = getPendingStore();
  const count = store.get(key) ?? 0;
  if (count > 0) {
    store.delete(key);
  }

  return count;
};

const getReadyStore = (): Set<string> => {
  const target = globalThis as PendingStoreTarget;
  if (!target[CLIENT_CLICK_READY_STORE_KEY]) {
    target[CLIENT_CLICK_READY_STORE_KEY] = new Set();
  }

  return target[CLIENT_CLICK_READY_STORE_KEY]!;
};

export const markClientClickHandlerReady = (key: string | undefined | null) => {
  if (!key) return;

  const store = getReadyStore();
  if (store.has(key)) {
    return;
  }

  store.add(key);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(CLIENT_CLICK_READY_EVENT, {
        detail: { key },
      })
    );
  }
};

export const waitForClientClickHandlerReady = (key: string | undefined | null, timeout = 1500) => {
  if (!key) return Promise.resolve();

  const store = getReadyStore();
  if (store.has(key)) {
    return Promise.resolve();
  }

  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    let timer: number | undefined;

    const cleanup = () => {
      if (typeof timer !== 'undefined') {
        window.clearTimeout(timer);
      }
      window.removeEventListener(
        CLIENT_CLICK_READY_EVENT,
        handleReady as EventListener
      );
    };

    const handleReady = (event: Event) => {
      if (!(event instanceof CustomEvent)) return;
      if (event.detail?.key !== key) return;
      store.add(key);
      cleanup();
      resolve();
    };

    window.addEventListener(
      CLIENT_CLICK_READY_EVENT,
      handleReady as EventListener
    );

    timer = window.setTimeout(() => {
      cleanup();
      resolve();
    }, timeout);
  });
};

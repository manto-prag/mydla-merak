import { lazy, ComponentType } from "react";

const RELOAD_KEY = "lazy-chunk-reload";

/**
 * Lazy import with automatic recovery: if a dynamically imported chunk
 * fails to load (e.g. after a new deploy invalidated old chunk hashes),
 * reload the page once to fetch fresh assets instead of crashing React.
 */
export function lazyRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(() =>
    factory().catch((err) => {
      const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY);
      if (!alreadyReloaded) {
        sessionStorage.setItem(RELOAD_KEY, "1");
        window.location.reload();
        // Return a never-resolving promise while the page reloads
        return new Promise<{ default: T }>(() => {});
      }
      sessionStorage.removeItem(RELOAD_KEY);
      throw err;
    })
  );
}

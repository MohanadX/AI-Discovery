/**
 * External store for the tool comparison selection.
 * Uses useSyncExternalStore so the server snapshot is always [] (no hydration mismatch).
 * Max 3 tools can be selected at a time.
 */

export type CompareItem = {
  id: string;
  name: string;
  slug: string;
};

const STORAGE_KEY = "ai-discovery:compare";
const MAX_COMPARE = 3;

/** Stable empty array to avoid infinite loops */
const EMPTY_SNAPSHOT: CompareItem[] = [];

// ─── Listeners ───────────────────────────────────────────────────────────────

type Listener = () => void;
const listeners = new Set<Listener>();

let cachedSnapshot: CompareItem[] | null = null;

function emitChange() {
  cachedSnapshot = null;
  listeners.forEach((l) => l());
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      emitChange();
    }
  });
}

// ─── Read ─────────────────────────────────────────────────────────────────────

function readStorage(): CompareItem[] {
  if (typeof window === "undefined") return EMPTY_SNAPSHOT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_SNAPSHOT;
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed) || parsed.length === 0) return EMPTY_SNAPSHOT;
    
    const filtered = (parsed as CompareItem[]).filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.slug === "string",
    );
    return filtered.length > 0 ? filtered : EMPTY_SNAPSHOT;
  } catch {
    return EMPTY_SNAPSHOT;
  }
}

function writeStorage(items: CompareItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota errors etc.
  }
}

// ─── Actions ─────────────────────────────────────────────────────────────────

export function toggleCompare(item: CompareItem) {
  const current = getSnapshot();
  const exists = current.some((i) => i.id === item.id);
  let next: CompareItem[];

  if (exists) {
    next = current.filter((i) => i.id !== item.id);
  } else {
    if (current.length >= MAX_COMPARE) return; // silently ignore if at max
    next = [...current, item];
  }

  writeStorage(next);
  emitChange();
}

export function clearCompare() {
  writeStorage(EMPTY_SNAPSHOT);
  emitChange();
}

// ─── useSyncExternalStore interface ─────────────────────────────────────────

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Client snapshot — reads from localStorage with in-memory cache */
export function getSnapshot(): CompareItem[] {
  if (cachedSnapshot === null) {
    cachedSnapshot = readStorage();
  }
  return cachedSnapshot;
}

/** Server snapshot — always empty to prevent hydration mismatch */
export function getServerSnapshot(): CompareItem[] {
  return EMPTY_SNAPSHOT;
}

export { MAX_COMPARE };

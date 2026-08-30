"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  type ReactNode,
} from "react";
import {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  toggleCompare,
  clearCompare,
  MAX_COMPARE,
  type CompareItem,
} from "@/lib/compare-store";

// ─── Context shape ───────────────────────────────────────────────────────────

type CompareContextValue = {
  selected: CompareItem[];
  toggle: (item: CompareItem) => void;
  isSelected: (id: string) => boolean;
  canAdd: boolean;
  clear: () => void;
};

const CompareContext = createContext<CompareContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CompareProvider({ children }: { children: ReactNode }) {
  const selected = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback((item: CompareItem) => {
    toggleCompare(item);
  }, []);

  const isSelected = useCallback(
    (id: string) => selected.some((i) => i.id === id),
    [selected],
  );

  const clear = useCallback(() => {
    clearCompare();
  }, []);

  const canAdd = selected.length < MAX_COMPARE;

  return (
    <CompareContext value={{ selected, toggle, isSelected, canAdd, clear }}>
      {children}
    </CompareContext>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) {
    throw new Error("useCompare must be used inside <CompareProvider>");
  }
  return ctx;
}

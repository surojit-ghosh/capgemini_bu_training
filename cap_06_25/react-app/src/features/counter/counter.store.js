import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const counterLogic = (set) => ({
  count: 0,
  increment: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
});

export const counterStore = create(
  devtools(persist(counterLogic, { name: "counter" }))
);

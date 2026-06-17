import { create } from "zustand";

const useZustandTodosStore = create((set) => ({
  items: [
    { id: 1, text: "Review PR", completed: false },
    { id: 2, text: "Write unit tests", completed: true },
    { id: 3, text: "Update API docs", completed: false },
    { id: 4, text: "Fix login bug", completed: false },
  ],
  filter: "all",

  addTask: (text) =>
    set((state) => ({
      items: [{ id: Date.now(), text, completed: false }, ...state.items],
    })),

  toggleTask: (id) =>
    set((state) => ({
      items: state.items.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    })),

  setFilter: (filter) => set({ filter }),
}));

export default useZustandTodosStore;

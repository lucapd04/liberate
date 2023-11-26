import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePathStore = create(
  persist(
    (set) => ({
      path: "",
      setPath: (newPath: string) => set(() => ({ path: newPath })),
    }),
    {
      name: 'path-storage', // unique name for localStorage key
    }
  )
);

export default usePathStore;

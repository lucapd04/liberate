import { create } from 'zustand';

const useSlideStore = create(set => ({
  slide: 1,
  setSlide: (newSlide:number) => set(() => ({ slide: newSlide })),
}));

export default useSlideStore;

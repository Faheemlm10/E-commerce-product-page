import { create } from "zustand";

type StoreState = {
  imageNumber: number;
  orderNumber: number;
  setImageNumber: (argo0: number) => void;
  increaseOrderNumber: () => void;
  decreaseOrderNumber: () => void;
  isModalOpen: boolean;
  cartNumberDisplayed: boolean;
  openModal: () => void; // New function declaration
  closeModal: () => void; // New function declaration
  increaseImageNumber: () => void;
  decreaseImageNumber: () => void;
  cartOpen: boolean;
  cartChange: () => void;
  setOrderNumberZero: () => void;
  cartNumberDisplayFunction: () => void;
  cartNumberFalseFunction: () => void;
};

const store = create<StoreState>((set) => ({
  imageNumber: 1,
  orderNumber: 0,
  isModalOpen: false,
  cartOpen: false,
  cartNumberDisplayed: false,
  setImageNumber: (number) => set(() => ({ imageNumber: number })),
  increaseOrderNumber: () =>
    set((store) => ({ orderNumber: store.orderNumber + 1 })),
  decreaseOrderNumber: () =>
    set((store) => ({ orderNumber: store.orderNumber - 1 })),
  openModal: () => set(() => ({ isModalOpen: true })), // Implementation of openModal,
  closeModal: () => set(() => ({ isModalOpen: false })), // Implementation of openModal
  increaseImageNumber: () =>
    set((store) => ({ imageNumber: store.imageNumber + 1 })),
  decreaseImageNumber: () =>
    set((store) => ({ imageNumber: store.imageNumber - 1 })),
  cartChange: () => set((store) => ({ cartOpen: !store.cartOpen })),
  setOrderNumberZero: () => set((store) => ({ orderNumber: 0 })),
  cartNumberDisplayFunction: () =>
    set((store) => ({ cartNumberDisplayed: true })),
  cartNumberFalseFunction: () =>
    set((store) => ({ cartNumberDisplayed: false })),
}));

export const useStore = store;

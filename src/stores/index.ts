import { create } from "zustand";

type CommonState = {
  openMenu: boolean;

}

type CommonAction = {
  updateOpenMenu: (open: boolean) => void;
}

const useCommonStore = create<CommonState & CommonAction>((set) => ({
  openMenu: false,
  updateOpenMenu: (open) => set({ openMenu: open }),
}))

export { useCommonStore };
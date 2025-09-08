import { create } from "zustand";

type SidebarState = {
    isCollapsed: boolean,
    isMobileOpen: boolean,
    toggleCollapse: () => void,
    openMobile: () => void,
    closeMobile: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
    isCollapsed: false,
    isMobileOpen: false,
    toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
    openMobile: () => set({ isMobileOpen: false }),
    closeMobile: () => set({ isMobileOpen: true })
}));
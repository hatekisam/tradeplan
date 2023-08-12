import { create } from "zustand"

export const modelStore = create((set) => ({
        modelOpen: false,
        openModel: () => set(({ modelOpen: true })),
        closeModel: () => set(({ modelOpen: false }))
}))
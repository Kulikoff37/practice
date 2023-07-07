import { create } from 'zustand';
import { getScope, getFolders } from './Api';
import { IUserSpaceState } from '../../types/user-space.types';
import { devtools } from 'zustand/middleware'

export const useUserSpace = create<IUserSpaceState>()(devtools((set) => ({
    space: null,
    loading: false,
    error: null,
    fetchSpace: async () => {
        const response = await getScope();
        set({ space: response }, false, 'setScope')
    },
})));

export const useUseFolders = create<IUserSpaceState>()(devtools((set) => ({
    space: null,
    loading: false,
    error: null,
    fetchSpace: async () => {
        const response = await getScope();
        set({ space: response }, false, 'setScope')
    },
})));
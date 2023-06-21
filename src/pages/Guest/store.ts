import { create } from 'zustand';
import { getUserSpace } from './api';
import { IUserSpaceState } from '../../types/user-space.types';
import { devtools } from 'zustand/middleware'

export const useUserSpace = create<IUserSpaceState>()(devtools((set) => ({
  space: null,
  loading: false,
  error: null,
  fetchSpace: async () => {
    const response = await getUserSpace();
    set({ space: response }, false, 'setScope')
  },
})));
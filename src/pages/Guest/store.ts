import { create } from 'zustand';
import { getUserSpace } from './api';
import { IUserSpaceState } from '../../types/user-space.types';

export const useUserSpace = create<IUserSpaceState>((set) => ({
  space: null,
  loading: false,
  error: null,
  fetchSpace: async () => {
    const response = await getUserSpace();
    set({ space: response })
  },
}));
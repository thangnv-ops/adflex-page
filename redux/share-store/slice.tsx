import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { UserRes } from '@/backend/service/user-service/user-res'
import { ShareStoreTypes } from '@/types'

const initialState: ShareStoreTypes = {
  loading: 0,
  breakPoint: 1,
  language: {},
  userInfo: {
    active: true,
    created: new Date(),
    email: '',
    modified: new Date(),
    name: '',
    phone: '',
    twoFactor: true,
    username: '',
    _id: '',
  },
}

const ShareStoreSlice = createSlice({
  name: 'share_store',
  initialState,
  reducers: {
    setLoadingGlobal: (state, actions: PayloadAction<boolean>) => {
      if (actions.payload) {
        return { ...state, loading: state.loading + 1 }
      }
      if (state.loading > 0) {
        return { ...state, loading: state.loading - 1 }
      }
      return state
    },
    setUserInfo: (state, actions: PayloadAction<UserRes>) => {
      state.userInfo = actions.payload
    },
    setLanguage: (state, actions: PayloadAction<{ [key: string]: string }>) => {
      state.language = actions.payload
    },
    setBreakPoint: (state, actions: PayloadAction<number>) => {
      state.breakPoint = actions.payload
    },
    resetLoading: (state) => {
      return { ...state, loading: 0 }
    },
    resetShareStore: () => initialState,
  },
})

export const {
  resetShareStore,
  setLoadingGlobal,
  setLanguage,
  setBreakPoint,
  resetLoading,
  setUserInfo,
} = ShareStoreSlice.actions

export default ShareStoreSlice

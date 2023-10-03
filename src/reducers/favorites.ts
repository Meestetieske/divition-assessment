import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import getFavoritesFromStorage from '../utils/getFavoritesFromStorage'

interface FavoriteState {
  ids: string[]
  overlayOpen: boolean
}

const initialState: FavoriteState = {
  ids: getFavoritesFromStorage(),
  overlayOpen: false,
}

const favoriteSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      if (state.ids.includes(action.payload)) {
        state.ids = state.ids.filter((id: string) => id !== action.payload)
      } else {
        state.ids.push(action.payload)
      }
      localStorage.setItem('favorites', state.ids.join(','))
    },
    toggleOverlay(state) {
      state.overlayOpen = !state.overlayOpen
    },
  },
})

export const { toggleFavorite, toggleOverlay } = favoriteSlice.actions
export default favoriteSlice.reducer

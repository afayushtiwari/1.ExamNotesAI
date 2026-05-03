import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"
export default configureStore({
  reducer: {
    user:userSlice
  },
})
//extracted from configureStore to avoid circular dependency issues
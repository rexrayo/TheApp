import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import rootReducer from './reducers/root/RootReducer'


const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export const state = store.getState()
export default store
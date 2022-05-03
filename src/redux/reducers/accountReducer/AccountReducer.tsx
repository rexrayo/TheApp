import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Account } from '../../../types/index';

const initialState: Account = {
    user_id: '',
    user_name: '',
    user_description: '',
    user_image: '',
    user_theme_manual: false,
    user_theme_automatic: false,
};

const accountSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveAccount(state, action: PayloadAction<Account>) {
            state.user_id = action.payload.user_id;
            state.user_name = action.payload.user_name;
            state.user_description = action.payload.user_description;
            state.user_image = action.payload.user_image;
            state.user_theme_manual = action.payload.user_theme_manual;
            state.user_theme_automatic = action.payload.user_theme_automatic;
        },
        updateAccount(state, action: PayloadAction<Account>) {
            state.user_id = action.payload.user_id;
            state.user_name = action.payload.user_name;
            state.user_description = action.payload.user_description;
            state.user_image = action.payload.user_image;
            state.user_theme_manual = action.payload.user_theme_manual;
            state.user_theme_automatic = action.payload.user_theme_automatic;
        },
    },
})

// export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = accountSlice.actions
export const { saveAccount, updateAccount } = accountSlice.actions
export default accountSlice.reducer
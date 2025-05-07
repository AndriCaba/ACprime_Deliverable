import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  funds: [],
};

export const FundSlice = createSlice({
  name: 'fund',
  initialState,
  reducers: {
    listFunds: (state, action) => {
      state.funds = action.payload;
    },
  },
});

export const { listFunds } = FundSlice.actions;

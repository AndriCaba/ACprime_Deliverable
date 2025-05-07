import { configureStore } from '@reduxjs/toolkit';

import { FundSlice } from './features';

export const makeStore = () => {
  return configureStore({
    reducer: {
      fund: FundSlice.reducer,
    },
  });
};

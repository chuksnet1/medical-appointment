import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isDarkMode: boolean;
  isSidebarCollapsed: boolean;
}

const initialState: InitialStateTypes = {
  isDarkMode: false,
  isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollaped: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollaped, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;

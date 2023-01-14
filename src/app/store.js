import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/ThemeSlices";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});

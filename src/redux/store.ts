
import { api } from "./services/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import battletagSlice from "./slices/battletagSlice";
import navigationDrawerSlice from "../components/NavigationDrawer/navigationDrawerSlice";
import notificationsSlice from "./slices/notificationsSlice";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/auth";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    battletag: battletagSlice,
    navigationDrawer: navigationDrawerSlice,
    notifications: notificationsSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

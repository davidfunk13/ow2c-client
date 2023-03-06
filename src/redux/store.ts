
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import horizontalStepperSlice from "../components/HorizontalStepper/horizontalStepperSlice";
import { api } from "./services/api";
import battletagSlice from "./slices/battletagSlice";
import navigationDrawerSlice from "../components/NavigationDrawer/navigationDrawerSlice";
import modalSlice from "../components/Modal/modalSlice";
import notificationsSlice from "./slices/notificationsSlice";
import sessionSlice from "./slices/sessionSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    battletag: battletagSlice,
    navigationDrawer: navigationDrawerSlice,
    modal: modalSlice,
    session: sessionSlice,
    theme: themeSlice,
    horizontalStepper: horizontalStepperSlice,
    notifications: notificationsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

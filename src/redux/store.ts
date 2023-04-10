
import { api } from "./services/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import addGameSlice from "../components/AddGameStepper/addGameSlice.";
import battletagSlice from "./slices/battletagSlice";
import horizontalStepperSlice from "../components/HorizontalStepper/horizontalStepperSlice";
import modalSlice from "../components/Modal/modalSlice";
import navigationDrawerSlice from "../components/NavigationDrawer/navigationDrawerSlice";
import notificationsSlice from "./slices/notificationsSlice";
import sessionSlice from "./slices/sessionSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    addGame: addGameSlice,
    battletag: battletagSlice,
    horizontalStepper: horizontalStepperSlice,
    modal: modalSlice,
    navigationDrawer: navigationDrawerSlice,
    notifications: notificationsSlice,
    session: sessionSlice,
    theme: themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

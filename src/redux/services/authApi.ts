import Battletag from "../../types/Battletag";
import { api } from "./api";

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        getLogin: build.query<Battletag, string>({
            query: (code) => ({
                url: `/login?code=${code}`,
                method: "POST",
            }),
        }),
        test: build.query({
            query: () => ({
                url: `/test`,
            }),
        }),
        logout: build.mutation({
            query() {
              return {
                url: `/logout`,
                method: 'GET',
              }
            },
        }),
    }),
});

export const { useGetLoginQuery, useTestQuery, useLogoutMutation,  } = authApi;

export const { endpoints: { getLogin } } = authApi;
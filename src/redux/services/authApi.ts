import Battletag from "../../types/Battletag";
import DatabaseRecord from "../../types/DatabaseRecord";
import { api } from "./api";

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        getLogin: build.query<Battletag, string>({
            query: (code) => ({
                url: `/login?code=${code}`,
                method: "POST",
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

export const { useGetLoginQuery, useLogoutMutation  } = authApi;

export const { endpoints: { getLogin } } = authApi;
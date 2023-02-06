import Battletag from "../../types/Battletag";
import DatabaseRecord from "../../types/DatabaseRecord";
import { api } from "./api";

interface AuthResponse {
    "message": string
    "battletag": Battletag & DatabaseRecord
    "token": string
}

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
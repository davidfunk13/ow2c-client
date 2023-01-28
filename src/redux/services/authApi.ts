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
        getLogin: build.query<AuthResponse, string>({
            query: (code) => ({
                url: `/login?code=${code}`,
                method: "POST",
            }),
            // transformResponse: (response: { data: Post }, meta, arg) => response.data,
            // providesTags: (result) => {
            //     return [{ type: "RefreshToken" }];
            // }
        }),
    }),
});

export const { useGetLoginQuery } = authApi;

export const { endpoints: { getLogin } } = authApi;
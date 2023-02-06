import Battletag from "../../types/Battletag";
import Session from "../../types/Session";
import { api } from "./api";

interface SessionResponse { }

interface ApiListResponse<T> {
    data: T[]
}

export const sessionApi = api.injectEndpoints({
    endpoints: (build) => ({
        getSessions: build.query<Session[], { id: string }>({
            query: ({ id }) => ({
                url: `/battletag/${id}/session`,
            }),
            transformResponse: (response: { data: Session[] }, meta, arg) => response.data,
            providesTags: (result) => {
                if (result && result && result.length) {
                    return [
                        ...result.map(({ id }: { id: string }) => ({ type: "Sessions", id } as const)),
                        { type: "Sessions", id: "LIST" },
                    ];
                }

                return [{ type: "Sessions", id: "LIST" }];
            }
        }),
        createSession: build.mutation({
            query: ({ battletagId, name }) => ({
                url: `/battletag/${battletagId}/session`,
                method: "POST",
                body: { name }
            }),
            invalidatesTags: [{ type: "Sessions", id: "LIST" }]
        }),
    })
})

export const { useGetSessionsQuery, useCreateSessionMutation } = sessionApi;

export const { endpoints: { getSessions, createSession } } = sessionApi;
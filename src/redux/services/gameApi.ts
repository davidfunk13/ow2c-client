import Game from "../../types/Game";
import { api } from "./api";

export const gameApi = api.injectEndpoints({
    endpoints: (build) => ({
        getGames: build.query<Game[], { battletagId: string, sessionId: string }>({
            query: ({ battletagId, sessionId }) => ({ url: `/battletag/${battletagId}/session/${sessionId}/game`, }),
            transformResponse: (response: { data: Game[] }, meta, arg) => response.data,
            providesTags: (result) => {
                if (result && result && result.length) {
                    return [
                        ...result.map(({ id }: { id: string }) => ({
                            type: "Games",
                            id
                        } as const)),
                        {
                            type: "Games",
                            id: "LIST"
                        },
                    ];
                }

                return [{
                    type: "Games",
                    id: "LIST"
                }];
            }
        }),
        createGame: build.mutation({
            query: ({ battletagId, sessionId, gameData }: { battletagId: string, sessionId: string, gameData: { location: string, result: number } }) => ({
                url: `/battletag/${battletagId}/session/${sessionId}/game`,
                method: "POST",
                body: gameData
            }),
            invalidatesTags: [{
                type: "Games",
                id: "LIST"
            }]
        }),
        deleteGame: build.mutation({
            query: ({ battletagId, sessionId, gameId }) => ({
                url: `/battletag/${battletagId}/session/${sessionId}/games/${gameId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Games"],
        }),
    })
});

export const {
    useGetGamesQuery,
    useDeleteGameMutation,
    useCreateGameMutation
} = gameApi;

export const { endpoints: { getGames, createGame, deleteGame } } = gameApi;

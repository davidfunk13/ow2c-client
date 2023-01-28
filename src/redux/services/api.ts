import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { setErrorSnackbar } from "../slices/notificationsSlice";
import { RootState } from "../store";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const token = (getState() as RootState).auth.token;

        if (token) {
            console.log("token set")
            headers.set("Authorization", token);
        }

        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const { dispatch } = api;
    
    let result = await baseQuery(args, api, extraOptions);

    if(result.meta?.response?.status === 401) {
        dispatch(setErrorSnackbar("Unauthorized: Something went wrong."))
        window.location.href = "/"
    }
    return result;
};

export const api = createApi({
    baseQuery:  baseQueryWithReauth,
    /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
    tagTypes: ["Sessions"],
    /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
    endpoints: () => ({}),
});
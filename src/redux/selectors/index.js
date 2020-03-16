import { get } from "lodash";

export const isSearchloading = state => get(state, "search.isLoading");
export const movieResults = state => get(state, "search.movieResults");

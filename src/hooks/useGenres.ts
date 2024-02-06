import useData from "./useData";
import geners from '../data/genres'

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres'); // to get Genre data from backend server
const useGenres = () => ({data: geners, isLoading: false, error: null});

export default useGenres;
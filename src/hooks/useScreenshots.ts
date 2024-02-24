import { useQuery } from "@tanstack/react-query";
import { GameScreenshot } from "../entities/GameScreenshot";
import APIClient from "../services/api-client";


const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<GameScreenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['screenshot', gameId],
        queryFn: apiClient.getAll,
    });
}

export default useScreenshots;
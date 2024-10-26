import { repoPodcast } from "../repositories/podcast-repositor";

export const serviceListEpisodes = async () => {

    const data = await repoPodcast();

    return data;
}
import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";
const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repoPodcast = async ( 
    podcastName?: string 
):  Promise<Podcast[]> => {
    const rawdata = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawdata);

    if(podcastName) {
        jsonFile = jsonFile.filter((podcast : Podcast) => podcast.podcastName === podcastName);
    }


    return jsonFile;
}
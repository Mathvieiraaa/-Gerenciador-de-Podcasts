import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service"
import { serviceFilterEps } from "../services/filter-ep";
import { url } from "inspector";

export const getListEps = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content));
};

export const getFilterEps = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceFilterEps(req.url);
    
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content));
}
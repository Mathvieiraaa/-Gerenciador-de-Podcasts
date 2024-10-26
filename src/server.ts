import * as http from "http";
import { getListEps, getFilterEps } from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

const server = http.createServer (
    async (req: http.IncomingMessage, res: http.ServerResponse) => {

        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

        console.log(baseUrl)
        console.log(queryString)


        if(req.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEps(req, res);
        }

        if (req.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
            await getFilterEps(req, res);
        }
    }
);


const port = process.env.PORT

server.listen(port, () => {
    console.log(`Servidor iniciado ${port}`);
});

import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routers from './routes/routers';

class Server {
    private app: Application;
    private port: number;

    constructor(app: Application, port: number) {
        this.app = app;
        this.port = port;
        this.config();
    }

    private config(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(cors())
        
        this.app.use('/', routers)
    }

    public run(): void {
        this.app.listen(this.port, () => {
            console.log(`The server is running on port ${this.port}`);
        });
    }    
}

export default Server;
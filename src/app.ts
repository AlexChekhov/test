import express, { Application } from 'express';
import Server from './server';

const app: Application = express();

const server: Server = new Server(app, 3000);

server.run()
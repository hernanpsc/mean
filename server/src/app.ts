
import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes"
import dbConnect from "./config/mongo";
import bodyParser from 'body-parser';
const csp = require('express-csp-header');const PORT = process.env.PORT || 3001;

const whitelist = [
    'http://localhost:80',
    'http://localhost:8080',
    'http://localhost:4200',
    'http://localhost:4300',
    'http://localhost:4400',
    'http://localhost:4500',
    'https://sakai-ng-front.vercel.app',
    'https://soloclinic.vercel.app',
    'https://front-prepagas.vercel.app'
  ];
  const portRegex = /^http:\/\/localhost(?::\d+)?$/;
  
  const filteredWhitelist = whitelist.filter((origin) => portRegex.test(origin));


const app = express()


// CORS middleware
app.use(cors({
  origin: '*',
  allowedHeaders: ['Authorization', 'Content-Type']
}));

// Body parser middleware
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(csp({
  policies: {
      'default-src': [csp.NONE],
      'img-src': [csp.SELF],
  }
}));


// Your existing router middleware
app.use(router);

dbConnect().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:` + PORT + `...`);

    });
  })
  .catch(error => console.error(error));

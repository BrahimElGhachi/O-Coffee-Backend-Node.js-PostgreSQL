import 'dotenv/config';
import express from 'express'

import { join } from 'node:path';
import { fileURLToPath } from 'url';

// Import local modules
import router from "./router.js";

const app= express();

// Branchement de EJS
app.set("views", join(import.meta.dirname, "views"));
app.set("view engine","ejs");

//Statics : IMG, CSS, JS etc...
app.use(express.static("./public"));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

app.use(router);


const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL || 'http://localhost';

app.listen(port, () => {
console.info(`Server Listening on ${base_url}:${port}`);
});


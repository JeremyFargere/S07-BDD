import 'dotenv/config';
import { join } from 'path';
import express from 'express';
const app = express();
import { router } from './src/router/router.js';
import { readFileSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

app.set('view engine', 'ejs');
// ! on se protège contre https://en.wikipedia.org/wiki/Directory_traversal_attack
const securedViewsPath = join(import.meta.dirname, 'src/views');
app.set('views', securedViewsPath);

const securedStaticPath = join(import.meta.dirname, 'public');
app.use(express.static(securedStaticPath));

app.use(router);

app.use((req, res) => {
    res.status(404).render('404');
});

// const users = [{}, {}];


// app.locals.users = users;

// console.log(app.locals);

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'http://localhost';

app.listen(port, () => {
    console.log(`Listening on ${baseUrl}:${port}`);
});

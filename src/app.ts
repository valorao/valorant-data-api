import express from 'express';
import { router } from './routes/routes';
import 'dotenv/config';
import { headersMiddleware } from './middlewares/headersMiddlewares';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(express.json());
app.use(headersMiddleware)
app.use('/valorant/v1', router);


app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
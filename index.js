import express from 'express';
import RouterApi from './routes/index.router.js';
import { boomErrorHandler, errorHandler, logErrors } from './middlewares/error.handler.js';
import cors from 'cors'

const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hola mi server en express')
});

RouterApi(app)

app.use( logErrors )
app.use( boomErrorHandler)
app.use( errorHandler )


app.listen(port, () => {
    console.log(`Aplicacion iniciada correctamente en el puerto ${port}`)
});
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());
app.use('', (req, res) => {
	res.send('¡Hola, mundo!');
});

app.listen(PORT, console.log('>>> Servidor esuchando en http://localhost:', PORT));

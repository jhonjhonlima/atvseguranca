require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const { initDb } = require('./src/utils/db');


const app = express();
const PORT = process.env.PORT || 4000;


// Segurança básica de cabeçalhos
app.use(helmet());


// Body parser
app.use(express.json());


// CORS - permitir apenas origem do frontend (defina em .env)
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';
app.use(cors({ origin: allowedOrigin }));


// Rotas
app.use('/api/auth', authRoutes);


// Inicializa banco e inicia servidor
initDb()
.then(() => {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
console.error('Erro ao iniciar DB', err);
});

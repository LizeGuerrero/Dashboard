<<<<<<< HEAD
// Importar librerías y módulos necesarios
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path'; // Importar módulo path para manejar rutas
import userRoutes from './routes/userRoutes';

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para manejar CORS y parsear el cuerpo de las solicitudes
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas de usuarios
app.use('/api', userRoutes);

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
=======
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración de variables de entorno
dotenv.config();

// Rutas importadas
/* import routes from './routes/routes.js';
import adminRoutes from './routes/adminRoutes.js';
 */
// Configuración de Express
const app:any = express ();    

// Middlewares
app.use(express.json()); // Análisis de solicitudes JSON
app.use(cors());         // Habilitar CORS
/* app.use(morgan('dev'));  // Logging de solicitudes HTTP */

// Rutas
/* app.use('/api', routes);
app.use('/api/admin', adminRoutes); */


// Conexión a MongoDB
// Conectar a MongoDB usando la URI del archivo .env
const mongoUri:any = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error:any) => console.error("Error al conectar a la base de datos:", error));

// Manejo de errores global
app.use((err:any, req:any, res:any, next:any) => {
    console.error(err);
    res.status(500).json({ error: 'Algo salió mal en el servidor.' });
});

// Hacemos correr el servidor en el puerto 3000
// Configuración de puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

console.log("MONGODB_URI:", process.env.MONGODB_URI);

export default app;
>>>>>>> f0a65fe0bf40fa18fbd0b7bb489f277cf5ea01f5

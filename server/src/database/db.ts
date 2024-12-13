// Importar librerías necesarias para la conexión a PostgreSQL
import { Pool } from 'pg';

// Crear un pool de conexiones con las credenciales de PostgreSQL
const pool = new Pool({
  user: 'postgres', // Usuario de la base de datos
  host: 'localhost', // Servidor de la base de datos
  database: 'crud_users', // Nombre de la base de datos
  password: '3214', // Contraseña del usuario
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Exportar la conexión para ser utilizada en otros módulos
export default pool;
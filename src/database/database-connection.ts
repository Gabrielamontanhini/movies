import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

// Conexão com o banco de dados
const configDatabase = {
    connectionString: process.env.DATABASE_URL,
};

export const db = new Pool(configDatabase);



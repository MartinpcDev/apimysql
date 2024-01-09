import mysql2, { ConnectionOptions } from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const config :ConnectionOptions = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
}

export const db = mysql2.createPool(config)

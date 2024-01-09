import { ResultSetHeader, RowDataPacket } from 'mysql2'
import { db } from '../database/db'
import { Producto } from '../interfaces/products';

export const getAllItems = async (): Promise<Producto[]> => {
  const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM producto')
  return rows as Producto[]
}

export const getItem = async (id: number): Promise<Producto> => {
  const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM producto WHERE id = ?', id)
  return rows[0] as Producto
}

export const postItem = async (data: Producto): Promise<Producto | null> => {
  const [rows] = await db.query<ResultSetHeader>('INSERT INTO producto SET ?', data)
  if (rows.insertId) {
    return await getItem(rows.insertId)
  }
  return null
}

export const updateItem = async (data: Producto, id: number): Promise<Producto | null> => {
  const [rows] = await db.query<ResultSetHeader>('UPDATE producto SET ? WHERE id = ?', [data, id])
  if (rows.affectedRows > 0) {
    return await getItem(id)
  }
  return null
}

export const deleteItem = async (id: number): Promise<object> => {
  const [rows] = await db.query<ResultSetHeader>('DELETE FROM producto WHERE id = ?', id)
  const isDeleted = rows.affectedRows > 0
  const message = 'Producto Eliminado'
  return { isDeleted, message }
}
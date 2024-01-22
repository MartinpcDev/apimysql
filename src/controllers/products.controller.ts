import { Request, Response } from "express";
import { deleteItem, getAllItems, getItem, postItem, updateItem } from "../services/products.service";
import { sendError, sendSuccess } from "../utils/handleMessage";
import { validatePartialProduct, validateProduct } from "../schemas/product";
import { Producto } from "../interfaces/products";

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await getAllItems()
    sendSuccess(res, response, 200, 'Productos Encontrados')
  } catch (error: any) {
    sendError(res, 'No se pudieron encontrar los Productos')
  }
}

export const getProduct = async ({ params }: Request, res: Response): Promise<void> => {
  try {
    const { id } = params
    const response = await getItem(Number(id))
    if (response) {
      sendSuccess(res, response, 200, 'Producto Encontrado')
    } else {
      sendError(res, 'El producto no se encuentra', 404)
    }
  } catch (error) {
    sendError(res)
  }
}

export const postProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto: Producto = {
      nombre: String(req.body.nombre),
      descripcion: String(req.body.descripcion),
      imagen: String(req.file?.filename),
      precio: Number(req.body.precio),
      stock: Boolean(req.body.stock)
    }
    const result = validateProduct(producto)
    if (!result.success) {
      sendError(res, JSON.parse(result.error.message))
    } else {
      const response = await postItem(producto)
      if (response) {
        sendSuccess(res, response, 201, 'Producto Creado')
      } else {
        sendError(res, 'No se Pudo crear el Producto')
      }
    }
  } catch (error) {
    sendError(res)
  }
}
/*!
validad
*/
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = validatePartialProduct(req.body)
    if (!result.success) {
      sendError(res, JSON.parse(result.error.message))
    } else {
      const id = Number(req.params['id'])
      const responseItem = await updateItem(req.body, id)
      if (responseItem) {
        sendSuccess(res, responseItem, 200, 'Producto Modificado')
      } else {
        sendError(res, 'No se pudo encontrar el Producto', 404)
      }
    }
  } catch (error) {
    sendError(res)
  }
}

export const deleteProduct = async ({ params }: Request, res: Response): Promise<void> => {
  try {
    const { id } = params
    const response = await deleteItem(Number(id))
    if (response) {
      sendSuccess(res, {}, 200, 'Producto Borrado')
    } else {
      sendError(res, 'No se encontro el Producto', 404)
    }
  } catch (error) {
    sendError(res)
  }
}
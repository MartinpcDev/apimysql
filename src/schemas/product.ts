import { Producto } from '../interfaces/products'
import z from 'zod'

const productSchema = z.object({
  nombre: z
    .string({
      invalid_type_error: 'El nombre debe ser un string',
      required_error: 'El nombre es requerido'
    })
    .min(3, {
      message: 'El nombre debe tener un minimo de 3 caracteres'
    })
    .max(100, {
      message: 'El nombre debe tener un maximo de 45 caracteres'
    }),
  descripcion: z
    .string({
      invalid_type_error: 'La descripcion debe ser un string',
      required_error: 'La descripcion es requerida'
    })
    .min(7, {
      message: 'La descripcion debe tener un minimo de 7 caracteres'
    })
    .max(255, {
      message: 'La descripcion debe tener un maximo de 255 caracteres'
    }),
  imagen: z
    .custom<File>(),
  precio: z
    .number({
      invalid_type_error: 'El precio tiene que ser un numero',
      required_error: 'El precio es requerido'
    })
    .positive({
      message: 'El precio debe ser positivo'
    })
    .min(10, {
      message: 'El valor minimo es de 10'
    })
    .max(999, {
      message: 'El valor maximo es de 999'
    }),
  stock: z.boolean({
    invalid_type_error: 'El valor debe ser un booleano',
    required_error: 'El stock es requerido'
  })
})

export const validateProduct = (data: Producto) => productSchema.safeParse(data)

export const validatePartialProduct = (data: Producto) => productSchema.partial().safeParse(data)
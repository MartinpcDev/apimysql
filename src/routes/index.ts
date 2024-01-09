import { Router } from "express"
import {readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`
export const router = Router()

const cleanFileName = (filename:string): string | undefined => {
  const file = filename.split('.').shift()
  return file
}

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename)
  if(cleanName !== 'index'){
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Cargando ruta ... ${cleanName}`)
      router.use(`/${cleanName}`,moduleRouter.router)
    })
  }
})
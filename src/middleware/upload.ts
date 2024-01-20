import { Request } from "express";
import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req: Request,file:Express.Multer.File,cb:any) => {
      cb(null,`${process.cwd()}/storage`)
    },
    filename: (req: Request, file: Express.Multer.File, cb: any) => {
      cb(null, file.originalname)
    }
  })
})
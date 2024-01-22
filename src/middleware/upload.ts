import { Request } from "express";
import multer from "multer";

export const upload = multer({
  fileFilter: (req: Request, file: Express.Multer.File, cb: any) => {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimetype = fileTypes.test(file.mimetype)
    if(mimetype) {
      cb(null,true)
    }else {
      cb('Invalid image type')
    }
  },
  limits: { fileSize: 5000000 },
  storage: multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: any) => {
      cb(null, `${process.cwd()}/storage`)
    },
    filename: (req: Request, file: Express.Multer.File, cb: any) => {
      cb(null, file.originalname)
    },
  })
})
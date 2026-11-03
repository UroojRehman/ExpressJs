import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const  storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.join(__dirname,"../uploads"))
    },

    filename: (req,file,cb)=>{
        const ext = path.extname(file.originalname)
        const FileName = Date.now()+file.originalname
        cb(null, FileName)
    }
});

const filefilter = (req,file,cb)=>{
    const allowedTypes = /jpeg|png|jpg/
    const extName = allowedTypes.test(path.extname(file.originalname))
    const mimeType = allowedTypes.test(file.mimeType)
    if(extName && mimeType){
        return cb(null,true)
    }else{
        return cb(new Error("Only imsged allowed (jpeg, lpg or png)"))
    }
};

const uploads = multer({
    storage,
    fileFilter,
    limits: {fileSize: 1024*1024 *2} //2MB
})

export default media
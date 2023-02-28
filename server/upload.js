const path = require("path");
const multer =require("multer");

const storage = multer.diskStorage({
    destination :(req ,file ,cb)=>{
        cb(null,"Images");
    },
    filename :(req ,file ,cb)=>{
        console.log(file);
        cb(null , Date.now() + path.extname(file.originalname));
    },
    
})

var upload = multer({storage :storage}).single('image');

module.exports = upload;
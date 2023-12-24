// imort section 

const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const path = require('path')

// change another in express functions
const app = express();

app.set("view engine", "ejs");

// multer part

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'image')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage}) 


app.get('/', (req,res) => {
    res.send("path clear!")
})
app.get("/upload", (req, res) => {
    res.render('index')
});
app.post("/upload",upload.single('image'), (req, res) => {
  res.send("image upload");
});


// port 
app.listen(PORT, () => {
    console.log(`server start at http://localhost:${PORT}`);
})



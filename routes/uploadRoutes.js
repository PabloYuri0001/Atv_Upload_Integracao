const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const { FuncUpload } = require('../controller/uploadController');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/upload', upload.single('file'), FuncUpload);

module.exports = router;

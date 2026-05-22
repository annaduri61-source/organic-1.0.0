import express from 'express';

import multer from 'multer';

const router = express.Router();

/* ======================================= */
/* MULTER STORAGE */
/* ======================================= */

const storage = multer.diskStorage({

  destination(req, file, cb) {

    cb(null, 'uploads/');
  },

  filename(req, file, cb) {

    cb(
      null,
      `${Date.now()}-${file.originalname}`
    );
  },
});

/* ======================================= */
/* MULTER */
/* ======================================= */

const upload = multer({
  storage,
});

/* ======================================= */
/* ROUTE */
/* ======================================= */

router.post(
  '/',
  upload.single('image'),
  (req, res) => {

    res.send({
      image: `/${req.file.path}`,
    });
  }
);

export default router;
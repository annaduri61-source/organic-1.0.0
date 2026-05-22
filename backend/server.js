import express from 'express';

import dotenv from 'dotenv';

import cors from 'cors';

import cookieParser from 'cookie-parser';

import path from 'path';

import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';

import productRoutes from './routes/productRoutes.js';

import cartRoutes from './routes/cartRoutes.js';

import uploadRoutes from './routes/uploadRoutes.js';

/* ======================================= */
/* CONFIG */
/* ======================================= */

dotenv.config();

/* ======================================= */
/* DATABASE */
/* ======================================= */

connectDB();

/* ======================================= */
/* APP */
/* ======================================= */

const app = express();

/* ======================================= */
/* MIDDLEWARE */
/* ======================================= */

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

/* ======================================= */
/* STATIC UPLOAD FOLDER */
/* ======================================= */

app.use(
  '/uploads',
  express.static(
    path.join(process.cwd(), 'uploads')
  )
);

/* ======================================= */
/* ROUTES */
/* ======================================= */

app.use('/api/auth', authRoutes);

app.use(
  '/api/products',
  productRoutes
);

app.use('/api/cart', cartRoutes);

/* ======================================= */
/* IMAGE UPLOAD ROUTE */
/* ======================================= */

app.use(
  '/api/upload',
  uploadRoutes
);

/* ======================================= */
/* TEST ROUTE */
/* ======================================= */

app.get('/', (req, res) => {

  res.send(
    'Food Mart API Running'
  );
});

/* ======================================= */
/* PORT */
/* ======================================= */

const PORT =
  process.env.PORT || 5000;

/* ======================================= */
/* SERVER */
/* ======================================= */

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});
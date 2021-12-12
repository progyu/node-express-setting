import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
  res.send('admin app');
});

router.get('/products', (_, res) => {
  res.send('admin products');
});

export default router;

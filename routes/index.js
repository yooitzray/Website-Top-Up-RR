const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index'); // homepage
});

router.get('/topup', (req, res) => {
  res.render('topup'); // form top up
});

router.post('/topup', (req, res) => {
  const { userId, game, nominal, payment } = req.body;
  // logika simpan pesanan atau redirect pembayaran
  res.send(`Top up ${nominal} untuk ${game} berhasil!`);
});

module.exports = router;

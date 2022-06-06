const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/test', (req,res) => {
  res.send('get test')
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
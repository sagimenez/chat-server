const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('k');
})

module.exports = router;
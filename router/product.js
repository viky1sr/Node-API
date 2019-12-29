const express = require("express");
const router = express.Router();

// module.exports = router => {

    router.get('/', (req, res) => {
        res.status(200).json({success: true, msg: 'Show all database'})
    });

    router.post('/', (req, res) => {
        res.status(200).json({success: true, msg: 'Show all database'})
    });

    router.put('/:id', (req, res) => {
        res.status(200).json({success: true, msg: `Show data bases on id ${req.params.id}`})
    });

    router.delete('/:id', (req, res) => {
        res.status(200).json({success: true, msg: `Delete data bases on id ${req.params.id}`})
    });

// };

module.exports = router;
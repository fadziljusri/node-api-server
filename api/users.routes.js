const router = require('express').Router(),
    { Res200 } = require('./middlewares/httpResponses');

router.get('/', async (req, res, next) => {
    let data = req.query;
    // console.log(data);

    return Res200(res)
})

router.post('/', async (req, res, next) => {
    let data = req.body;
    // console.log(data);

    return Res200(res, data)
})

module.exports = router
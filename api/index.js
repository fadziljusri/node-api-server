const router = require('express').Router();
const bodyParser = require('body-parser')

const usersAPI = require('./users.routes');

module.exports = function (app) {
    app.use("/api", router);

    // parse application/json
    app.use(bodyParser.json())

    router.get("/", (req, res, next) => {
        res.send("Server works!");
    });

    usersAPI(app);
}
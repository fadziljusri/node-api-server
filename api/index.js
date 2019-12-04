const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3000,
    app = express(),

    usersAPI = require('./users.routes');

// parse application/json
app.use(bodyParser.json())
app.use("/api", router);

usersAPI(app);

router.get("/", (req, res, next) => {
    res.send("Server works!");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
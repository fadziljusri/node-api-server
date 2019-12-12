const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    PORT = process.env.PORT || 3000,
    app = express(),

    usersRouter = require('./users.routes');


// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);
app.use("/api/users", usersRouter);

router.get("/", (req, res, next) => res.send("Server works!"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
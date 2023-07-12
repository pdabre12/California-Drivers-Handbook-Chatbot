const express = require('express');
const cookieParser = require('cookie-parser');
const createCompletion = require("./createCompletion.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var cors = require("cors")
app.use(cors({ origin:'*' }));
app.post('/dmvguide', (req, res) => {
//    createCompletion.createCompletion(req.body.question).then(response => {
//         console.log("response", response);
//     /*res.send(response)*/});
   console.log(req.body)
    res.send({data : "request succeeded",status:"200"})
});

app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});

const port = 8080;
const appListenCallBack = async () => {
    try {
        console.log(`Server started on port ${port}`);
    } catch (error) {
        console.error(`Server started on port ${port} with error`);
        console.error(error.stack);
    }
};

app.listen(port, appListenCallBack);
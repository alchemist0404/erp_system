const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs')
const PORT = process.env.PORT || 6140;
const dotenv = require('dotenv');
const mongoose = require("./src/configuration/mongoose");
dotenv.config();

const route = require('./src/route');
// const GameMiddleWare = require('./src/middleware/gameMiddleware');
const { Games } = require('./src/model');
const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

mongoose()

app.use('/api', route)

app.use(express.static(__dirname + '/src/build'));
app.use('/webpage', express.static(__dirname + '/src/webpage'));
app.get('/webpage', (req, res) => {
  res.sendFile(__dirname + '/src/webpage/index.html');
});
Games.find({}).then(result => {
  if (result.length == 0) {
    console.log("There is no Games");
  } else {
    for (const gameIndex in result) {
      var fileExists = fs.existsSync(__dirname + `/src/games/${result[gameIndex].route}/index.html`)
      if (fileExists) {
        app.use(`/${result[gameIndex].route}`, express.static(__dirname + `/src/games/${result[gameIndex].route}`));
        app.get(`/${result[gameIndex].route}`, (req, res) => {
          res.sendFile(__dirname + `/src/games/${result[gameIndex].route}/index.html`);
        })
      }
    }
    app.get('*', (req, res) => {
      res.sendFile(__dirname + '/src/build/index.html');
    });
  }
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`);
  })
}).catch(() => {
  console.log("Database is disconnected");
})
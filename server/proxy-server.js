const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));

app.get('/game_carousel_info', async (req, res) => {
  const gameId = req.query.id;
  try {
    const { data } = await axios.get(`http://3.137.75.100:3008/game_carousel_info?id=${gameId}`)
    res.json(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({ internalServerError: err });
  }

});

app.get('/morelikethis', async (req, res) => {
  const gameId = req.query.id;
  //3.137.75.100
  try {
    const { data } = await axios.get(`http://3.137.75.100:3002/morelikethis?id=${gameId}`)
    res.json(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({ internalServerError: err });
  }

});

app.get('/reviews', async (req, res) => {
  //204.236.178.72
  const gameId = req.query.id;
  try {
    let { data } = await axios.get(`http://204.236.178.72:3001/reviews?id=${gameId}`)
    res.send(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({ internalServerError: err });
  }

});

app.get('/events_and_announcements', async (req, res) => {
  //204.236.178.72
  const gameId = req.query.id;
  try {
    let { data } = await axios.get(`http://204.236.178.72:3007/events_and_announcements?id=${gameId}`)
    res.send(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({ internalServerError: err });
  }

});

app.get('/metadata', async (req, res) => {
  console.log('here');
  const gameId = req.query.id;
  try {
    const { data }  = await axios.get(`http://3.131.140.35:3005/metadata?id=${gameId}`)
    console.log(data);
    res.send(data);
  } catch(err) {
    console.log(err);
    res.status(500).send({ internalServerError: err });
  }

});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
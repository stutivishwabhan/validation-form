const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.validPost) {
    res.status(200).send(
      `Successfully submitted!`,
    );
  } else {
    res.status(404).send(
      `There are invalid fields`
    );
  }
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));
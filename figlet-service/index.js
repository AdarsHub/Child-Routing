const express = require('express');
const figlet = require('figlet');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/stylize', (req, res) => {
  const { text } = req.body;
  console.log(`Received text: ${text}`); // Log the received text
  figlet.text(text, (err, data) => {
    if (err) {
      console.error('Error generating ASCII art:', err);
      res.status(500).send('Error styling text');
    } else {
      console.log(`Generated ASCII art:\n${data}`); // Log the generated ASCII art
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Figlet service listening at http://localhost:${port}`);
});

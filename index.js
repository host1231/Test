const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app =  express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/run-command', (req, res) => {
    exec('node parser.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send(`Error: ${error.message}`);
      }
      res.send(`stdout: ${stdout}\nstderr: ${stderr}`);
    });
  });

app.listen(5000, () => {
    console.log('Server Start!');
});
const { urlencoded } = require('express');
const express = require('express');
const path = require('path'); // NEW

const app = express();
const port = process.env.PORT || 3000;
const ROUTINE_FILE = path.join(__dirname, './src/routine.html')

// app.use(express.static(DIST_DIR)); // NEW

app.use(urlencoded());
// app.get('/', (req, res) => {
//  res.sendFile(HTML_FILE); // EDIT
// });





app.listen(port, function () {
    console.log('App listening on port: ' + port);
   });
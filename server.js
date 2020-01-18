const express = require('express');
const app = express();

let PORT = process.env.PORT || 5000;

// Serve static content for the app from the "public" directory in the application directory.j
app.use(express.static('./assets/'));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`Server listening on: http:/localhost:${PORT}`);
})
const server = require('./app');
require('dotenv').config();
const PORT = process.env.PORT;

server.listen(prompt, function() {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
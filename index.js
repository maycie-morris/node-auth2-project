const express = require('express')
const server = require('./api/server.js');


server.use(express.json())


const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});
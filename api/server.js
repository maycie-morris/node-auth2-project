const express = require('express');
const server = express();
const helmet = require('helmet');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

server.use(express.json());
server.use(helmet());

server.use('/api', authRouter);
server.use('/api/users', usersRouter)

server.get('/', (req,res) => {
    res.status(200).json({
        message: `Hello hello hello!`
    })
});


module.exports = server;
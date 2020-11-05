const express = require('express');
const PORT = process.env.PORT || 3001
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
server.listen(PORT);
const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const server = express();

//server.use(cors({
//	origin: ""
//}));

server.use(morgan("dev"));
server.use(express.json());

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	next();
});

server.use('/', router);

module.exports = server;

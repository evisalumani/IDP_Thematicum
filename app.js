import express from 'express';
import path from 'path';
import http from 'http';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as settings from './server/utilities/settings';

//routes
import authRoutes from './server/routes/auth.routes';
import themeRoutes from './server/routes/theme.routes';
import stockRoutes from './server/routes/stock.routes';
import themePropertiesRoutes from './server/routes/themeProperties.routes';
import stockAllocationRoutes from './server/routes/stockAllocations.routes';
import adminRoutes from './server/routes/admin.routes';

dotenv.config();
const app = express();

const mongodbPath = settings.getDBConnectionString();
mongoose.connect(mongodbPath)
    .then(() => console.log('Connected to MongoDb'))
    .catch(error => console.log('Error connecting to MongoDb'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/auth', authRoutes);
app.use('/api/themes', themeRoutes);
app.use('/api/themeproperties/', themePropertiesRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/stockallocations', stockAllocationRoutes);
app.use('/api/admin', adminRoutes);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

// Authorize all OPTIONS requests 
/** https://stackoverflow.com/questions/45297853/angular-2-response-for-preflight-has-invalid-http-status-code-401 */
app.use(function (err, req, res, next) {
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// Error handling
app.use(function (err, req, res, next) {
    console.log('Error handling middleware', JSON.stringify(err))
    return res.status(err.status || 500).json(err);
});

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

// TODO: handlers?
// server.on('error', onError);
// server.on('listening', onListening);

export default app;
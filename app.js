const userRoute = require( './route/user' );
const dataRoute = require( './route/data' );

const 
    express = require( 'express' ),
    global = express.Router(),
    app = express();

        app.use( ( req, res, next ) => {
            res.setHeader(  'Access-Control-Allow-Origin', '*' );
            res.setHeader(  'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' );
            res.setHeader(  'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS' );
            next();
        } );

        global.use( '/user', userRoute );
        global.use( '/data', dataRoute );
    
    app.use( '/api', global );
module.exports = app;

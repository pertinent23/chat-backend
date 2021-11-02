const 
    fetch = require( './fetch' ),
    firebase = require( './firebase' ),
    express = require( 'express' ),
    app = express();

        app.use( ( req, res, next ) => {
            res.setHeader(  'Access-Control-Allow-Origin', '*' );
            res.setHeader(  'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' );
            res.setHeader(  'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS' );
            next();
        } );

        app.use( '/api/list/', ( req, res ) => {
            return fetch( 'https://my.api.mockaroo.com/backend_test.json', {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f3d124f0'
                }
            } ).then( ( data ) => {
                return data.json();
            } ).then( ( data ) => {
                res.json( 'error' in data ? [ ] : data );
            } ).catch( () => {
                res.json( [] );
            } );
        } );

        app.use( '/api/db/', ( req, res ) => {
            res.json( firebase.firebaseConfig );
        } );

module.exports = app;

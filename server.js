const 
    PORT = process.env.PORT || 3000,
    http = require( 'http' ),
    app = require( './app' ),
    getPort = ( port ) => {
        const 
            res = parseInt( port, 10 );
                if( isNaN( res ) ) {
                    return port;
                }
                
                if ( port >= 0 ) {
                    return port;
                }
        return false;
    };

app.set( 'port', getPort( PORT ) );
const
    server = http.createServer( app );
        server.on( 'listening', () => {
            const 
                addr = server.address(),
                str = typeof addr === 'string' ? `pipe ${addr}` : `port: ${addr.port}`;
            console.log( `Server listening on ${str}.` );   
        } );
server.listen( process.env.PORT || 3000 );
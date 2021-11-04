const 
    express = require( 'express' ),
    router = express.Router(),
    crontroller = require( '../controllers/user' );

        router.post( '/registration', crontroller.registration );
        router.post( '/login', crontroller.login );

        router.get( '/', crontroller.base );
        router.get( '/add', crontroller.add );
        router.get( '/list', crontroller.list );
        router.get( '/listUser', crontroller.listUser );

module.exports = router;
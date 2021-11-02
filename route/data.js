const 
    express = require( 'express' ),
    router = express.Router(),
    crontroller = require( '../controllers/data' );

        router.get( '/', crontroller.base );

module.exports = router;
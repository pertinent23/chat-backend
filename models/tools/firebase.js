const 
    admin = require( 'firebase-admin' ),
    serviceAccountKey = require( './key' );
        admin.initializeApp( {
            credential: admin.credential.cert( serviceAccountKey )
        } );
    
module.exports = {
    auth: admin.auth(),
    db: admin.firestore()
};
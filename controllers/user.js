const 
    admin = require( 'firebase-admin' ),
    serviceAccountKey = require( '../models/key' );
        admin.initializeApp( {
            credential: admin.credential.cert( serviceAccountKey )
        } );

const 
    db = admin.firestore(),
    auth = admin.auth();

module.exports.resgistration = ( req, res ) => {
    const 
        data = {
            fisrtname: 'Franck',
            lastname: 'Pertinent'
        };
    db.collection( 'users' ).add( data ).then( () => {
        res.status( 200 ).json( {
            res: 'Ok'
        } );
    } ).catch( ( error ) => {
        res.status( 401 ).json( { error } );
    } );
};

module.exports.login = async ( req, res ) => {
    auth.getUsers( [ { email: '1test@gmail.com' }, { password: 'tester232' } ] ).then( ( data ) => {
        res.status( 200 ).json( {
            res: data
        } );
    } ).catch( ( error ) => {
        res.status( 401 ).json( { error } );
    } )
};

module.exports.base = ( req, res ) => {
    res.json( {
        message: 'user management with fire base'
    } );
};

module.exports.add = ( req, res ) => {
    res.json( {
        params: req.params,
        query: req.queries
    } );
};

module.exports.list = ( req, res ) => {
    db.collection( 'users' ).listDocuments().then( ( response ) => {
        res.json( response.map( ( val ) => {
            return val._path.segments[ 1 ];
        } ) );
    } );
};

module.exports.listUser = ( req, res ) => {
    db.collection( 'users' ).get().then( function ( data ) {
        res.json( {
            data: data.docs.map( ( val ) => {
                return {
                    pk: val.id,
                    ...val.data()
                };
            } )
        } )
    } );
};
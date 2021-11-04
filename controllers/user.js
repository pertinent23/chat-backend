const 
    User = require( '../models/class/user' );

module.exports.registration = ( req, res ) => {
    return User.createUser( {
        email: req.query.email,
        password: req.query.password
    } ).then( function ( data ) {
        res.status( 200 ).json( data );
    } ).catch( ( error ) => {
        res.status( 401 ).json( { error } );
    } );
};

module.exports.login = async ( req, res ) => {
    
};

module.exports.base = ( req, res ) => {
    res.json( {
        message: 'user management with fire base'
    } );
};

module.exports.add = async ( req, res ) => {
    const 
        pass =  'my passord 232',
        res1 = User.crypPassword( pass ),
        res2 = User.decryptPassword( res1 );
    return res.json( { pass, res1, res2 } );
};

module.exports.list = ( req, res ) => {
    /*db.collection( 'users' ).listDocuments().then( ( response ) => {
        res.json( response.map( ( val ) => {
            return val._path.segments[ 1 ];
        } ) );
    } );*/
};

module.exports.listUser = ( req, res ) => {
    /*db.collection( 'users' ).get().then( function ( data ) {
        res.json( {
            data: data.docs.map( ( val ) => {
                return {
                    pk: val.id,
                    ...val.data()
                };
            } )
        } )
    } );*/
};
const 
    Crypt = require( './crypt' ),
    engine = require( '../tools/firebase' ),
    db = engine.db,
    auth = engine.auth;

class User {
    static PRIVATE_KEY = 'Private_KEY@2.5=key.2444';

    static getCollection() {
        return db.collection( 'users' );
    }

    static crypPassword( password ) {
        const 
            crypt = new Crypt( User.PRIVATE_KEY );
        return crypt.encrypt( password );
    }

    static decryptPassword( password ) {
        const 
            crypt = new Crypt( User.PRIVATE_KEY );
        return crypt.decrypt( password );
    }

    static createUser( { email, password } ) {
        return new Promise( function ( resolve, reject ) {
            return auth.createUser( { email } ).then( function ( data ) {
                return User.getCollection().doc( data.uid ).create( {
                    email: email,
                    first_name: '',
                    last_name: '',
                    password: password
                } ).then( () => resolve( {
                    res: {
                        email: email,
                        uid: data.uid
                    }
                } ) ).catch( ( error ) => {
                    return reject( error );
                } );
            } ).catch( ( error ) => {
                return reject( error );
            } );
        } );
    }
}

module.exports = User;
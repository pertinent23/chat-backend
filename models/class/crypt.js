class Crypt{
    key = '';
    minCode = 60;

    constructor( key )  {
        this.setKey( key );
    }

    verifyKey() {
        if ( typeof key === 'string' && this.key.length >= 3 ) 
            return true;
        return false;
    }

    getKey() {
        return this.key;
    }

    getMinCode() {
        return this.minCode;
    }

    setKey( val = 'BASIC_KEY_CODE' ) {
            this.key = val;
        return this;
    }

    setMinCode( min = 46 ) {
        if( min >= 46 && min <= 61 )
            this.minCode = min;
        return this;
    }

    encrypt( data = '' ) {
        let keyIndex = 0, result = '';
        const 
            key = this.getKey(),
            part = [];
            data = typeof data === 'string' ? data : data.toString();
                data.split( '' ).forEach( ( val ) => {
                    part.push( val.charCodeAt( 0 ) );
                } );
            for ( let index = 0; index < part.length; index++ ) {
                keyIndex = keyIndex >= key.length ? 0 : keyIndex;
                    const 
                        code = key[ keyIndex ].charCodeAt( 0 ),
                        dif = code < part[ index ] ? part[ index ] - code : code - part[ index ];
                    result += String.fromCharCode( dif + this.getMinCode() ) + ( code < part[ index ] ? 1 : 0 );
                keyIndex++;
            }
        return result;
    }

    decrypt( data = '' ) {
        let keyIndex = 0, result = '';
        const 
            key = this.getKey(),
            part = [];
            data = typeof data === 'string' ? data : data.toString();
                data.split( '' ).forEach( ( val ) => {
                    part.push( val.charCodeAt( 0 ) );
                } );
            for ( let index = 0; index < part.length - 1; index += 2 ) {
                keyIndex = keyIndex >= key.length ? 0 : keyIndex;
                console.log( part[ index ] );
                    const 
                        code = key[ keyIndex ].charCodeAt( 0 ),
                        type = parseInt( data.charAt( index + 1 ) ),
                        final = part[ index ] - this.getMinCode();
                        console.log( final, data.charAt( index ) );
                    result += String.fromCharCode( type === 1 ? code : final - code );
                keyIndex++;
            }
        return result;
    }
};

module.exports = Crypt;
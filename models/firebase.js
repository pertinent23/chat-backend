const firebaseConfig = {
    apiKey: "AIzaSyBrerSqfS0hkMlKRozOLnL8dk9NhyM3OXw",
    authDomain: "test-f2389.firebaseapp.com",
    projectId: "test-f2389",
    storageBucket: "test-f2389.appspot.com",
    messagingSenderId: "802897528550",
    appId: "1:802897528550:web:2006c446ca3649f0301d27",
    measurementId: "G-9FP83MD1QS"
};

module.exports = async () => {
    const 
        initializeApp = ( await import( 'firebase/auth' ) ).default,
        app = initializeApp( firebaseConfig );
    return app;
};


module.exports.firebaseConfig = firebaseConfig;
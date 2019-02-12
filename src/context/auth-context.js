import React from 'react';

const authContext = React.createContext({
    authenticated: false,   // this will just be an object of default values
    login: () => {}
});

export default authContext;
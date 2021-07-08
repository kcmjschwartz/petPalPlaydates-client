let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1' :
    
        APIURL = 'http://localhost:4000';
        break;

    case 'kcs-hoa-client.herokuapp.com':

        APIURL='https://kcs-petpals.herokuapp.com/'

}

export default APIURL;
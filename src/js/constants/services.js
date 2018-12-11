export const ENDPOINT = 'http://tdi-api.test/api/article';


export const CLIENT_ID = "1";
export const REDIRECT_URI = "http://localhost:3000/callback";
export const SECRET = "futxZwQiELQ8fU5bPcq7zEtN40Doc5ORepGvYbWn";

export const AUTH_ENDPOINT = 'http://tdi-api.test/oauth/authorize?' +
    'client_id='+CLIENT_ID +
    '&redirect_uri='+REDIRECT_URI +
    '&response_type=code';

export const TOKEN_ENDPOINT = 'http://tdi-api.test/oauth/token';

export const USER_ENDPOINT = 'http://tdi-api.test/api/auth';
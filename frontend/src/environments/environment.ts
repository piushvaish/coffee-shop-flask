/* @TODO replace with your variables
 * ensure all variables on this page match your project
 https://knowledge.udacity.com/questions/80917
 */
export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-pv.eu.auth0.com', // the auth0 domain prefix
    audience: 'coffee-shop', // the audience set for the auth0 app
    clientId: 'kfgfFO4x3QdKOwrNRvlRDidG26TQwOFK', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};

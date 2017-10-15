// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey:            'AIzaSyDpbGTt0fLXm7NlfyFDOMN2JCvj0oc-kXs',
    authDomain:        'quinielhero.firebaseapp.com',
    databaseURL:       'https://quinielhero.firebaseio.com',
    storageBucket:     'quinielhero.appspot.com',
    messagingSenderId: '576621860208',
    projectId:         'quinielhero'
  }
};

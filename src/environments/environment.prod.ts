// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyDk_5JM-vgMG8-cOP1s4PDIe8-z4E4awzQ',
    authDomain: 'networkbookae.firebaseapp.com',
    databaseURL: 'https://networkbookae.firebaseio.com',
    projectId: 'networkbookae',
    storageBucket: 'networkbookae.appspot.com',
    messagingSenderId: '920711277135'
  }
};

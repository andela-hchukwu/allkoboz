// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDsT9mTtHQoGpCqEBRo1j6eCFJk7SUjXnk",
    authDomain: "shop-allkoboz.firebaseapp.com",
    databaseURL: "https://shop-allkoboz.firebaseio.com",
    projectId: "shop-allkoboz",
    storageBucket: "shop-allkoboz.appspot.com",
    messagingSenderId: "359717571155"
  }
};
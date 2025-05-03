const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'app-abilities',

  exposes: {
    './Component': './projects/app-abilities/src/app/app.component.ts',
    './AbilitiesListComponent': './projects/app-abilities/src/app/abilities/pages/abilities-list/abilities-list.component.ts',
    './AbilitiesFeaturedComponent': './projects/app-abilities/src/app/abilities/pages/abilities-featured/abilities-featured.component.ts',
    './routes': './projects/app-abilities/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});

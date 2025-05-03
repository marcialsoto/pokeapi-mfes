const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'app-types',

  exposes: {
    './Component': './projects/app-types/src/app/app.component.ts',
    './TypesListComponent': './projects/app-types/src/app/types/pages/types-list/types-list.component.ts',
    './TypesFeaturedComponent': './projects/app-types/src/app/types/pages/types-featured/types-featured.component.ts',
    './routes': './projects/app-types/src/app/app.routes.ts',
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

"use strict";



define('website/app', ['exports', 'ember', 'website/resolver', 'ember-load-initializers', 'website/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('website/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('website/helpers/app-version', ['exports', 'ember', 'website/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('website/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('website/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('website/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'website/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('website/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('website/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('website/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('website/initializers/export-application-global', ['exports', 'ember', 'website/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('website/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('website/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('website/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("website/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('website/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('website/router', ['exports', 'ember', 'website/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('website/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("website/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NmPPoimi", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"jumbotron text-center\"],[13],[0,\"\\n\\n  \"],[11,\"img\",[]],[15,\"src\",\"assets/images/LogoBlancFonds.png\"],[15,\"alt\",\"Logo Biocoop en Vexin\"],[13],[14],[0,\"\\n\\n  \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n  \"],[11,\"p\",[]],[15,\"class\",\"teaser\"],[13],[0,\"Votre\"],[14],[0,\"\\n  \"],[11,\"h1\",[]],[15,\"class\",\"teaserEm\"],[13],[0,\"magasin bio\"],[14],[0,\"\\n  \"],[11,\"p\",[]],[15,\"class\",\"teaser\"],[13],[0,\"bientôt à Magny-en-Vexin\"],[14],[0,\"\\n  \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"row hours\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-md-6 col-md-offset-3\"],[13],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-hourglass\"],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\" Horaires d'ouverture :\\n      \"],[11,\"ul\",[]],[13],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Du mardi au jeudi : 9h-12h30 et 14h30-19h\"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Vendredi et samedi : 9h-19h sans interruption\"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"Dimanche : 9h-12h\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-earphone\"],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\" Téléphone : 01 84 24 42 20\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"row social\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-4 col-md-4 instagram\"],[13],[0,\"\\n      \"],[11,\"a\",[]],[15,\"href\",\"https://www.instagram.com/biocoopenvexin/\"],[13],[11,\"img\",[]],[15,\"src\",\"assets/images/instagram.png\"],[15,\"alt\",\"Page Instagram\"],[13],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-4 col-md-4\"],[13],[0,\"\\n      \"],[11,\"a\",[]],[15,\"href\",\"https://www.facebook.com/BiocoopEnVexin/\"],[13],[11,\"img\",[]],[15,\"src\",\"assets/images/facebook.png\"],[15,\"alt\",\"Page Facebook\"],[13],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-4 col-md-4\"],[13],[0,\"\\n      \"],[11,\"a\",[]],[15,\"href\",\"https://twitter.com/BiocoopEnVexin\"],[13],[11,\"img\",[]],[15,\"src\",\"assets/images/twitter.png\"],[15,\"alt\",\"Fil Twitter\"],[13],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"row biocoop\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-md-3 col-md-offset-9\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[15,\"src\",\"assets/images/biocoop.png\"],[15,\"alt\",\"Un magasin du réseau Biocoop\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "website/templates/application.hbs" } });
});
define("website/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YGqTuffa", "block": "{\"statements\":[[0,\"Index\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "website/templates/index.hbs" } });
});


define('website/config/environment', ['ember'], function(Ember) {
  var prefix = 'website';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("website/app")["default"].create({"name":"website","version":"0.0.0+"});
}
//# sourceMappingURL=website.map

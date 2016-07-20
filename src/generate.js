var _ = require('lodash');

// regex to replace named params
var namedParams = /:(\w+)/g;
// regex to replace optional params
var optionalParams = /(\((.*?)\))/g;

module.exports = function(router, name, params) {
    /**
     * @param router : a Marionette router
     * @param name : the name of the route to use
     * @param params : the route parameters
     */
    params = params || params;

    // Finc correct route
    var urls = _.assignIn(_.invert(router.appRoutes),
            _.invert(router.routes));
    var url = urls[name];
    if(url === undefined) {
        throw new Error('Url not found');
    }

    // Replace named params
    url = url.replace(namedParams, function(match, p) {
        return params[p] || ':' + p;
    }

    // Compute optional params
    url = url.replace(optionalParams, function(match, p, q) {
        if(namedParams.test(p)) {
            return '';
        }
        return q;
    });

    // Return well formed url
    if(namedParams.test(url)) {
        throw new Error('Missing parameters');
    }
    return url;
};

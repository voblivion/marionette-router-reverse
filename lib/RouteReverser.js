(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['lodash'], function(_) {
            return factory(root, _);
        });
    } else if (typeof exports !== 'undefined') {
        var _ = require('lodash');
        module.exports = factory(root, _);
    } else {
        factory(root, _);
    }
}(this, function(root, _) {

    // regex to replace named params
    var namedParams = /:(\w+)/g;

    // regex to replace optional params
    var optionalParams = /(\((.*?)\))/g;

    /**
     * @param router : a Marionette router
     * @param name : the name of the route to use
     * @param params : the route parameters
     */
    function reverse(name, params) {
        params = params || {};

        // Finc correct route
        var urls = _.assignIn(_.invert(this.appRoutes), _.invert(this.routes));
        var url = urls[name];
        if(url === undefined) {
            throw new Error('Url not found');
        }

        // Replace named params
        url = url.replace(namedParams, function(match, p) {
            return params[p] || ':' + p;
        });

        // Compute optional params
        url = url.replace(optionalParams, function(match, p, q) {
            if (namedParams.test(p)) {
                return '';
            }
            return q;
        });

        // Return well formed url
        if(namedParams.test(url)) {
            throw new Error('Missing parameters');
        }
        return url;
    }

    function navigateTo(name, params, options) {
        return this.navigate(this.reverse(name, params), options);
    }

    root.RouteReverser = {
        reverse: reverse,
        navigateTo: navigateTo
    };

    return root.RouteReverser;
}));

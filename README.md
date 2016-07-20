# marionette-router-reverse
Module to reverse Marionette's router
Use this module to generate correct url for register route in a Marionette router.

## Usage
If `AppRouter.js` is something like :
```
var Mn = require('backbone.marionette');
var AppController = require('./AppController');

module.exports = Mn.AppRouter.extend({
  routes: {
    'index': 'index'
  },
  
  index: function() {
    console.log('Hello World !');
  },
  
  appRoutes: {
    'users/': 'users',
    'users/:id/': 'user',
    'todos(/category/:category)/': 'todos'
  },
  
  initialize: function() {
    this.controller = new AppController();
  }
});
```
Then anywere you can generate correct url as follow :
```
var urls = require('marionette.router.reverse');

module.exports = function() {
  // assuming app is global
  app.router.navigate(urls.generate(app.router, 'index');
  // or
  app.router.navigate(urls.generate(app.router, 'users');
  // or
  app.router.navigate(urls.generate(app.router, 'user', {id: 42}));
  // or
  app.router.navigate(urls.generate(app.router, 'todos');
  // or
  app.router.navigate(urls.generate(app.router, 'todos', {category: 17});
};
```

# marionette-router-reverse
Module to reverse Marionette's router

## Motivation
Use this module to generate correct url for register route in a Marionette router. This way you don't have to know your url configuration in your code, juste the name you gave to your controllers. It is very lightweight.

## Pull requests
Feel free :) soon I'll surely add this module directly into Marionette.AppRouter.

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
  app.router.navigate(urls.to(app.router, 'index');
  // or
  app.router.navigate(urls.to(app.router, 'users');
  // or
  app.router.navigate(urls.to(app.router, 'user', {id: 42}));
  // or
  app.router.navigate(urls.to(app.router, 'todos');
  // or
  app.router.navigate(urls.to(app.router, 'todos', {category: 17});
};
```

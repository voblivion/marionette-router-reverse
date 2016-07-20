# marionette-router-reverse
Module to reverse Marionette's router

## Motivation
Use this module to generate correct url for register route in a Marionette router. This way you don't have to know your url configuration in your code, juste the name you gave to your controllers. It is very lightweight.

## Pull requests
Feel free :) soon I'll surely add this module directly into Marionette.AppRouter.

## Usage

In `AppRouter.js` :

```js
var Mn = require('backbone.marionette');
var AppController = require('./AppController');
var AppRouteReverser = require('app-route-reverser');

module.exports = Mn.AppRouter.extend(AppRouteReverser).extend({
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

Then anywere you can generate and navigate to correct url as follow :

```js

module.exports = function() {
  // assuming app is global
  app.router.navigate(app.router.reverse('index');
  // or
  app.router.navigate(app.router.reverse('users');
  // or
  app.router.navigate(app.router.reverse('user', {id: 42}));
  // or
  app.router.navigate(app.router.reverse('todos');
  // or
  app.router.navigate(app.router.reverse('todos', {category: 17});

  // or even
  app.router.navigateTo('todos, {category; 17}, {trigger: true});
};
```

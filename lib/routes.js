Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    template: 'hello'
  });

  this.route('profilePage', {
    path: '/profile',
    template: 'profilePage'
  });

  this.route('insertNewDrink', {
    path: '/newdrink',
    template: 'insertNewDrink'
  });

  this.route('showDrinks', {
    path: '/cocktails',
    template: 'drinks'
  });
});

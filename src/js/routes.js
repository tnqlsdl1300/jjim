import HomePage from '../pages/home.f7.html';

import LoginPage from '../pages/login.f7.html';
import JoinPage from '../pages/join.f7.html'; // 회원가입
import FindLoginPage from '../pages/find-login.f7.html';

import BusStopPage from '../pages/busstop.f7.html';


var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/busstop/',
    component: BusStopPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/find-login/',
    component: FindLoginPage,
  },
  {
    path: '/join/',
    component: JoinPage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },

];

export default routes;
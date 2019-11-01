import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: '', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

<<<<<<< HEAD
// 로그인창 확인 -> 입력 정보 저장
=======
// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});

>>>>>>> 869941156b6854e1dee6ff938c9a10432b3f8f38
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

});

<<<<<<< HEAD
=======
$$('#my-join-screen .join-button').on('click', function () {
>>>>>>> 869941156b6854e1dee6ff938c9a10432b3f8f38


// 로그인창 뒤로가기
$$('#my-login-screen .back-button').on('click', function () {

  // Close login screen
  app.loginScreen.close('#my-login-screen');

});

// 데이터 받기 함수(백업 프로젝트 다이나믹루트 참고))
$$('#my-find-screen .ok-button').on('click', function () {
  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
<<<<<<< HEAD
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

// 아이디 비밀번호 찾기 버튼 페이지 이동을 위한 함수(실패)
$$('#my-login-screen .find-button').on('click', function () {

  // Close login screen
  app.loginScreen.open();
=======
  app.dialog.alert('회원가입이 완료되었습니다.');
});

// Create toast with icon
var toastIcon = app.toast.create({
  icon: app.theme === 'ios' ? '<i class="f7-icons">star</i>' : '<i class="material-icons">star</i>',
  text: 'I\'m with icon',
  position: 'center',
  closeTimeout: 2000,
});

// Open toast
$$('.open-toast-icon').on('click', function () {
  toastIcon.open();
});

// reservation check
$$(' .rescheck-button').on('click', function () {

  // Alert username and password
  app.dialog.alert('예약이 완료되었습니다.');
>>>>>>> 869941156b6854e1dee6ff938c9a10432b3f8f38

});
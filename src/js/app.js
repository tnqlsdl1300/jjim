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
const firebase = require("firebase");
var firebaseConfig = {
  apiKey: "AIzaSyA-CggIbVwqZRC4nqbDD3aYjOlGLEiOaWU",
  authDomain: "jjim-e0f16.firebaseapp.com",
  databaseURL: "https://jjim-e0f16.firebaseio.com",
  projectId: "jjim-e0f16",
  storageBucket: "jjim-e0f16.appspot.com",
  messagingSenderId: "400499294292",
  appId: "1:400499294292:web:16bac47867212f69faedc1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore()
// db.collection("users").add({
//   username: "111",
//   password: "2222"
// })

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


// 로그인창 확인 -> 입력 정보 저장

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
// $$('#logout-id .logout-btn').on('click', function() {
//   firebase.auth().signOut();
// });


$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  db.collection("users").add({
    username: username,
    password: password
  })
  // Close login screen
  // app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

});

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

  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

// 아이디 비밀번호 찾기 버튼 페이지 이동을 위한 함수(실패)
$$('#my-find-screen .find-button').on('click', function () {

  // Close login screen
  app.findScreen.open();

  app.dialog.alert('회원가입이 완료되었습니다.');
});


// reservation check
$$(' .rescheck-button').on('click', function () {

  // Alert username and password
  app.dialog.alert('예약이 완료되었습니다.');
});

/*
$$('.link-back').on('click', function() {
  console.log('test')
  var container = $$('.page[data-name="home"] #map');
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  };

  var map = new kakao.maps.Map(container, options);
})
*/
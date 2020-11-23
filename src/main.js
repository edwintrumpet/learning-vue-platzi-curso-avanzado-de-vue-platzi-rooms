import Vue from 'vue';
import firebase from 'firebase/app';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyACLGuyj7kofNgmA5yIOPs97aO4To7jR-Q',
  authDomain: 'platzi-rooms-cursoavanzadovue.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-cursoavanzadovue.firebaseio.com',
  projectId: 'platzi-rooms-cursoavanzadovue',
  storageBucket: 'platzi-rooms-cursoavanzadovue.appspot.com',
  messagingSenderId: '360280269690',
  appId: '1:360280269690:web:f2578f387058627b512cc3',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),

  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');

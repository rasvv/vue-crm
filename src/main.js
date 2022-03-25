import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);

const firebaseConfig = {
  apiKey: "AIzaSyAz0mPPZzyxSCCz8V_KN1HzGf8oLgLgSP8",
  authDomain: "vue-rasvv-crm.firebaseapp.com",
  projectId: "vue-rasvv-crm",
  storageBucket: "vue-rasvv-crm.appspot.com",
  messagingSenderId: "224236720570",
  appId: "1:224236720570:web:a36a8ca12230b191a5cd83",
  measurementId: "G-VSDZ79R7Y8",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.auth().onAuthStateChanged(() => {
  if (app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");    
  }
// })



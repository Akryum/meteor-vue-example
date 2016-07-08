// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

import KeenUi from 'keen-ui';
Vue.use(KeenUi);

// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    el: 'body',
    replace: false,
    components: {
      App
    }
  });
});

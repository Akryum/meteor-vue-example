// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

// Main app
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  new Vue(App).$mount(document.body);
});

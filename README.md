# Simple meteor app with vue

A simple meteor project featuring [vue](https://vuejs.org/) as ui layer ([more info](https://github.com/Akryum/meteor-vue-component)).

## Steps to reproduce

In the console, create the project and add the relevant packages:

    meteor create meteor-vue-example
    cd ./meteor-vue-example
    meteor remove blaze-html-templates
    meteor add static-html akryum:vue akryum:vue-component session
    meteor

All the required npm dependencies will be automatically added to your project's `package.json` and installed with `meteor npm install`.

Replace the `client/main.html` file with:

```html
<head>
  <title>meteor-vue-example</title>
</head>

<body>
  <app></app>
</body>
```

Replace the `client/main.js` file with:

```javascript
// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

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
```

Create Vue components in `.vue` files. Component files ending with `.global.vue` outside of the `imports` directory will automatically registered with `Vue.component` ([more info](https://github.com/Akryum/meteor-vue-component/tree/master/packages/vue-component#global-vue-components)). Or you can import your single-file components with an `import` statement ([more info](https://github.com/Akryum/meteor-vue-component/tree/master/packages/vue-component#manual-import)). When you save them, your components will be instantly hot-reloaded in your browser.

You can add more languages in your single-file components, see [here](https://github.com/Akryum/meteor-vue-component/tree/master/packages/vue-component#language-packages).

Inside your Vue components, you can use [Meteor tracker](https://github.com/Akryum/meteor-vue-component/tree/master/packages/vue#usage) or [Apollo](https://github.com/Akryum/meteor-vue-component/tree/master/packages/vue-apollo#installation).

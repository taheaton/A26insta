import angular from 'angular';
import 'angular-ui-router';


// Import our sub modules
import './app-core/index';
import './app-layout/index';
import './app-images/index';


angular
  .module('app', ['app.core', 'app.layout', 'app.images'])
;



console.log('Hello, World');

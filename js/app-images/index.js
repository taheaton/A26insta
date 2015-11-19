import angular from 'angular';
import '../app-core/index';

import ImagesController from './controllers/images.controller';
import ImagesAddController from './controllers/images-add.controller';

import ImageService from './services/image.service';

import imageItem from './directives/image.directive';

angular
  .module('app.images', ['app.core'])
  .controller('ImagesController', ImagesController)
  .controller('ImagesAddController', ImagesAddController)
  .service('ImageService', ImageService)
  .directive('imageItem', imageItem)
;
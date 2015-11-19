let imageItem = function($state, ImageService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '=image'
    },
    template: `
      <div class="panel">
        <h5>{{ image.role }}</h5>

        <hr>
        <p>Played by: {{ image.name }}</p>
        <img ng-src="{{ image.pic }}">
        <p>{{ image.quote }}</p>
        <p>Likes: {{ image.likes }}</p>
        <p>Also in: {{ image.other }}</p>
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function () {
        element.addClass('heart');
        ImageService.like(scope.image);
        //$state.go('root.singleImage', { id: scope.image.objectId });
      });
    }
  };

};

imageItem.$inject = ['$state', 'ImageService'];

export default imageItem;
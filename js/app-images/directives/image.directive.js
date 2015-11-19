let imageItem = function($state, ImageService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '=image'
    },
    template: `
      <div class="panel">
        <h5>{{ image.name }}</h5>
        <p>{{ image.age }} {{ image.role }} {{ image.other }}</p>
        <img src = "{{ image.pic }}"></img>
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function () {
        ImageService.destroy(scope.image.name);
        //$state.go('root.singleImage', { id: scope.image.objectId });
      });
    }
  };

};

imageItem.$inject = ['$state', 'ImageService'];

export default imageItem;
let ImagesController = function(ImageService) {
  
  let vm = this;

  vm.images = [];
  vm.clicked = clicked;

  activate();

  function activate () {
    ImageService.getAllImages().then( (res) => {
      vm.images = res.data.results;
    });
  }

  function clicked (image) {
    console.log('clicked', image.name);
  }
  
};

ImagesController.$inject = ['ImageService'];

export default ImagesController;
let ImagesAddController = function(ImageService) {
  
  let vm = this;

  vm.addImage = addImage;

  function addImage (imageObj) {
    ImageService.addImage(imageObj).then( (res) => {
      console.log(res);
    });
  }

};

ImagesAddController.$inject = ['ImageService'];

export default ImagesAddController;
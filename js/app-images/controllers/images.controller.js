let ImagesController = function(ImageService) {
  
  let vm = this;

  vm.images = [];
  vm.clicked = clicked;
  vm.count = 0
  vm.message = "";

   vm.incrementByOne = function() {
     vm.count++;
     vm.message = (vm.count === 1) ? "Thank you for your submission.  We will contact you soon!" : "Thank you for your interest!";

   };
  

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
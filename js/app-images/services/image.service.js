let ImageService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/image';

  this.getAllImages = getAllImages;
  this.addImage = addImage;
  this.destroy = destroy;

  function Image (imageObj) {
    this.name = imageObj.name;
    this.role = imageObj.role;
    this.pic = imageObj.pic;
    this.other = imageObj.other;
  }

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (imageObj) {
    let c = new Image(imageObj);
    return $http.post(url, c, PARSE.CONFIG);
  }

  function destroy (name) {
    return console.log(name + ' has been destroyed');
  }


};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;
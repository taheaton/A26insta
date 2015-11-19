let ImageService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/image';

  this.getAllImages = getAllImages;
  this.addImage = addImage;
  this.like = like;

  function Image (imageObj) {
    this.name = imageObj.name;
    this.role = imageObj.role;
    this.pic = imageObj.pic;
    this.other = imageObj.other;
    this.quote = imageObj.quote;
    this.hobby = imageObj.hobby;
  }

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (imageObj) {
    let c = new Image(imageObj);
    return $http.post(url, c, PARSE.CONFIG);
  }

  function like (obj) {
    updateLikes(obj);
    return console.log(obj);
  }
  function updateLikes (obj) {
    obj.likes = obj.likes + 1;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  }



};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;
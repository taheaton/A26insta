let HomeController = function(PARSE) {

  console.log(PARSE);

  let vm = this;
  
  vm.title = 'The Godfather';
  vm.img = 'http://www.sfsymphony.org/SanFranciscoSymphony/media/Library/Event-Images/TheGodfather_583x336.jpg?width=583&height=336&ext=.jpg';

};

HomeController.$inject = ['PARSE'];

export default HomeController;
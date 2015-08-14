app.controller('MainController', ['$scope', 
function($scope){

$scope.title = 'Hello World';                                $scope.promo = 'This is a promo';

$scope.products = [
  {
  	name: 'The Book of Trees',
     price: 19,
     pubdate: new Date('2014', '03', '08'),
     cover: 'img/the-book-of-trees.jpg',
 		likes: 0,
  	dislikes: 0},
  {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg',
 	 likes: 0,
    dislikes: 0},
  {
  	name: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
    price: 24,
    pubdate: new Date('2015', '05', '01'),
    cover: 'img/elon-musk',
    likes: 0,
    dislikes: 0},
  {
  	name: 'Algorithms Unlocked',
     price: 20,
     pubdate: new Date('2013', '01', '01'),
     cover: 'img/algorithms-unlocked',
  	likes: 0,
     dislikes: 0},
]
 
$scope.plusOne = function(index){
	$scope.products[index].likes +=1;
}
$scope.minusOne = function(index){
	$scope.products[index].dislikes +=1;
}

}]);
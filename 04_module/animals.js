const animals = ['puppy', 'cat'];

// 다른방법
exports.animals = animals;

exports.showAnimals = function showAnimals() {
  animals.map((el) => console.log(el));
};

// function showAnimals() {
//   animals.map((el) => console.log(el));
// }

// 사용하고싶은것들을 외부로 빼줄때 module.exports
// module.exports = {
//   animals,
//   showAnimals,
// };

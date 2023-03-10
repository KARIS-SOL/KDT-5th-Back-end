// const animalsModule = require('./animals');

// console.log(animalsModule);
// console.log(animalsModule.animals);
// animalsModule.showAnimals();

// 구조분해 할당 문법 (따로따로 받는다)- 추가로 공부필요!!
//  { animals,
//   showAnimals,
//   };
const { animals, showAnimals } = require('./animals');

console.log(animals);
showAnimals();

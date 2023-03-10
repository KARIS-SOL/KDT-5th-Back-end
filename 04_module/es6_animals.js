export const animals = ['puppy', 'cat'];

// 빼고싶으면 앞에 'export'를 붙혀라,
export function showAnimals() {
  animals.map((el) => console.log(el));
}

// 줄여서 내보내면 받을때도 줄여서 받아야함
export { animals as ani, showAnimals as show };

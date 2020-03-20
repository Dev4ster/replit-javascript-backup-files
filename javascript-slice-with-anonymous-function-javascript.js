const foods = [
    'Apple',
    'Banana',
    'Cheese',
    'Donuts',
    'Egg',
    'Fish',
    'Grapes',
];

const [arr1, arr2] = (()=> {
    let indexies = Math.ceil(foods.length / 2);
    let arr1 = foods.slice(0,indexies);
    let arr2 = foods.slice(indexies, foods.length);
    return [ arr1, arr2];
})();

console.log(arr1); // [ 'Apple', 'Banana', 'Cheese', 'Donuts' ]
console.log(arr2); // [ 'Egg', 'Fish', 'Grapes' ]
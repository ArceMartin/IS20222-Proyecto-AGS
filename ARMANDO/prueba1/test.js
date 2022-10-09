let btnCheck = document.querySelector('button');
let result = document.querySelector('h1');

// let fruits1 = ['Apple', 'Orange', 'Mango', 'Kiwi', 'Grapes'];
// let fruits2 = ['Apple', 'Orange', 'mango', 'grapes', 'Kiwi'];

let fruits1 = [1,25,26,56,79];
let fruits2 = [1,25,26,79,56, 87];

btnCheck.addEventListener('click', () => {
    // let myArray1 = fruits1.map(fruit => fruit.toLowerCase());
    // let myArray2 = fruits2.map(fruit => fruit.toLowerCase());

    fruits1.sort();
    fruits2.sort();
    
    let str1 = fruits1.toString();
    let str2 = fruits2.toString();

    result.innerText = str1 == str2 ? 'Equal' : 'Not Equal';
});
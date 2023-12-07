//Task # 1 ---------------
/*Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back. */

function camelize(str) {
    let arr = str.split('-');
    let temp = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let capWord = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        temp.push(capWord);
    }
    let newWord = temp.join('');
    return newWord;
}

//Task # 2 -----------
/*Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)*/

function filterRange(arr, a, b) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element >= a && element <= b) {
            result.push(element);
        }
    }

    return result;
}
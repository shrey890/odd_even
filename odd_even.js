// let number = parseInt(prompt('enter the number (n) to get the list of odd and even numbers from 0 to n'));
// // console.log(number)
// if (!isNaN(number)) {
//     let evenContainer = '<div class=even> <h2>EVEN</h2><ul>'
//     let oddContainer = '<div class=odd> <h2>ODD</h2><ul>'
//     let odd = ''
//     let even = ''
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             even = '<li>' +  i + 'is even</li>';
//             evenContainer += even;
//         } else {
//             odd = '<li>' + i + 'is odd </li>';
//             oddContainer+= odd;
//         }
//     }
//     evenContainer += '</ul> </div>';
//     oddContainer += '</ul> </div>';
//     // console.log(evenContainer)
//     document.write(oddContainer);
//     document.write(evenContainer);
// }
let number = parseInt(prompt('Enter the number (n) to get the list of odd and even numbers from 0 to n'));

if (!isNaN(number)) {
    let evenContainer = '<div class="even"><h2>EVEN</h2><ul>';
    let oddContainer = '<div class="odd"><h2>ODD</h2><ul>';

    for (let i = 0; i <= number; i++) {
        // if (i % 2 === 0) {
        //     evenContainer += '<li>' + i + ' is even</li>';
        // } else {
        //     oddContainer += '<li>' + i + ' is odd</li>';
        // }
        if (i % 2 === 0) {
            evenContainer += '<li class="fade-in">' + i + ' is even</li>';
        } else {
            oddContainer += '<li class="fade-in">' + i + ' is odd</li>';
        }
    }

    evenContainer += '</ul></div>';
    oddContainer += '</ul></div>';

    let resultContainer = evenContainer + oddContainer;
    document.write(resultContainer);
}

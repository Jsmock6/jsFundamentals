/*
    -switch statements execute a block of code depending on different cases
    -switch statements often use the break or default keywords (or both together)
        -both keywords are optional

        -break keywords breaks out of the current condition & switch statement
        -default keyword specifies code to run if there is no case match

*/

let officeCharacter = 'Pam';

switch(officeCharacter) {
    case 'Michael':
        console.log('My mind is going a mile an hour.');
        break;
    case 'Dwight':
        console.log('Perfectenschlag');
        break;
    case 'Jim':
        console.log('Bears. Beat. Beats.');
        break;
    default:
        console.log(`Im sorry, ${officeCharacter}, but do i know you?`);
        
    }

//CHALLENGE

let dessert = 'cake'

switch(dessert) {
   case 'pie':
    console.log('Pie, pie, me oh my!');
    break;

    case 'cake':
        console.log('Cake is great!');
        break;
    
    case 'ice cream':
        console.log('I scream for ice cream!');
    break;

    default:
        console.log('not on the menu, sorry.');


}
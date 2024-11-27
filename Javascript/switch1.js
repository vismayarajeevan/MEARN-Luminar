//Q) write a program to print "weekday" for all week days and "holiday" for saturday and sunday

// link prompt file

const prompt= require ('prompt-sync') ({signit:true})

const day =prompt('Enter any day:')
console.log(day, typeof day);

switch(day){
    case 'monday':
        console.log(`${day} this is a weekday`);
        break;
        case 'tuesday':
        console.log(`${day} this is a weekday`);
        break;
        case 'wednesday':
        console.log (`${day}this is a weekday`);
        break;
        case 'thursday':
        console.log(`${day}this is a weekday`);
        break;
        case 'friday':
        console.log(`${day}this is a weekday`);
        break;
        case 'saturday':
        console.log(`${day}this is a holiday`);
        break;
        case 'sunday':
        console.log(`${day}this is a holiday`);
        break;
        default:console.log(`not a valid day`);
}
